import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-items-as-links',
    templateUrl: './items-as-links.component.html',
    styleUrls: ['./items-as-links.component.scss']
})
export class ItemsAsLinksComponent implements OnInit {
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
