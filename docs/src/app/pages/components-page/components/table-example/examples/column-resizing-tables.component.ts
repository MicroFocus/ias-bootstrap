import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import * as Chance from 'chance';

@Component({
    selector: 'app-column-resizing-tables',
    templateUrl: './column-resizing-tables.component.html',
    styleUrls: ['./column-resizing-tables.component.scss']
})
export class ColumnResizingTablesComponent {
    type: string = 'table';
    documents: TableDocument[] = [];
    selection: TableDocument[] = [];

    titleWidth: number = 260;
    authorWidth: number = 300;
    dateWidth: number;

    chance = new Chance();

    constructor() {
        // generate some dummy data
        for (let idx = 0; idx < 15; idx++) {
            this.documents.push({
                selected: false,
                title: `Document ${idx + 1}`,
                author: this.chance.name(),
                date: this.chance.date({ year: new Date().getFullYear() }) as Date
            });
        }
    }
}

interface TableDocument {
    selected: boolean;
    title: string;
    author: string;
    date: Date;
}
