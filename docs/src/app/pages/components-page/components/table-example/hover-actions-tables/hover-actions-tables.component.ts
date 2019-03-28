import { Component } from '@angular/core';
import * as Chance from 'chance';

@Component({
  selector: 'app-hover-actions-tables',
  templateUrl: './hover-actions-tables.component.html',
  styleUrls: ['./hover-actions-tables.component.scss']
})
export class HoverActionsTablesComponent{
    documents: HoverActionDocument[] = [];
    chance = new Chance();

    constructor() {

        for (let idx = 1; idx < 6; idx++) {
            this.documents.push({
                name: `Document ${idx}`,
                author: this.chance.name(),
                date: this.chance.date({ year: 2019 }) as Date,
                complete: this.chance.integer({ min: 0, max: 100 })
            });
        }
    }
    getSparkLabel(value: number): string {
        return `<span class="spark-label hidden-xxs">${value}%</span>`;
    }
}

interface HoverActionDocument {
    name: string;
    author: string;
    date: Date;
    complete: number;
}
