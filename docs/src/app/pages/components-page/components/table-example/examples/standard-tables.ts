import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ColumnSortingComponent, ColumnSortingOrder, ColumnSortingState } from '@ux-aspects/ux-aspects';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as Chance from 'chance';

@Component({
    selector: 'app-standard-tables',
    templateUrl: './standard-tables.html',
    styleUrls: ['./standard-tables.scss']
})
export class StandardTablesComponent implements OnDestroy {

    order: ColumnSortingOrder[] = [];
    items: TableData[] = [];
    selection: TableData[] = [];
    chance = new Chance();

    constructor(private _announcer: LiveAnnouncer) {
        for (let i = 0; i < 10; i += 1) {
            this.items.push({
                id: i,
                name: 'Document ' + this.chance.integer({ min: 10, max: 100 }),
                author: this.chance.name(),
                date: (<Date>this.chance.date({ year: 2016 })).toLocaleDateString(),
                completed: this.chance.integer({ min: 10, max: 100 }),
                active: this.chance.bool(),
                selected: false
            });
        }
    }

    ngOnDestroy(): void {
        this._announcer.ngOnDestroy();
    }

    changeState(title: string, column: ColumnSortingComponent) {
        this.order = column.changeState();
        this.items = this.sort(this.items, this.order);

        // announce the change to any screen reader
        this._announcer.announce(this.getColumnAriaLabel(title, column));
    }

    sort(array: TableData[], sorters: ColumnSortingOrder[]): TableData[] {

        return array.sort((itemOne: TableData, itemTwo: TableData) => {

            // iterate through each sorter
            for (const sorter of sorters) {
                const value1 = itemOne[sorter.key];
                const value2 = itemTwo[sorter.key];

                if (value1 === value2) {
                    continue;
                }

                if (sorter.state === ColumnSortingState.Ascending) {
                    return value1 < value2 ? -1 : 1;
                } else {
                    return value1 > value2 ? -1 : 1;
                }
            }

            return itemOne.id < itemTwo.id ? -1 : 1;
        });
    }

    getSparkLabel(value: number): string {
        return `<span class="spark-label hidden-xxs">${value}%</span>`;
    }

    getColumnAriaLabel(title: string, column: ColumnSortingComponent): string {

        switch (column.state) {

            case ColumnSortingState.Ascending:
                return column.order ?
                    `${title}: Ascending sort with priority ${column.order} applied,
                    activate to apply a Descending sort` :
                    `${title}: Ascending sort applied, activate to apply a Descending sort`;

            case ColumnSortingState.Descending:
                return column.order ?
                    `${title}: Descending sort with priority ${column.order} applied,
                    activate to apply no sorting` :
                    `${title}: Descending sort applied, activate to apply no sorting`;

            default:
                return `${title}: No sort applied, activate to apply an Ascending sort`;
        }
    }
}

export interface TableData {
    id: number;
    name: string;
    author: string;
    date: string;
    completed: number;
    active: boolean;
    selected?: boolean;
}
