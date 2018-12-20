import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-items-as-buttons',
    templateUrl: './items-as-buttons.html',
    styleUrls: ['./items-as-buttons.scss']
})
export class ItemsAsButtonsComponent implements OnInit {
    selectedItem: number;

    constructor() {
    }

    ngOnInit() {
    }

    select(event: MouseEvent, item: number) {
        if (event.ctrlKey) {
            this.selectedItem = 0;
        } else {
            this.selectedItem = item;
        }
    }
}
