import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel-dnd',
    templateUrl: './panel-dnd.component.html',
    styleUrls: ['./panel-dnd.component.scss']
})
export class PanelDndComponent implements OnInit {
    panels = [
        {
            title: 'Mercury',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Venus',
            body: 'Curabitur nibh urna, imperdiet ac eleifend quis, placerat nec nisi.'
        },
        {
            title: 'Earth',
            body: 'Phasellus ac diam id mauris lobortis malesuada nec ac tortor.'
        },
        {
            title: 'Mars',
            body: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            title: 'Jupiter',
            body: 'Nulla auctor, ipsum id condimentum ultricies, augue arcu molestie arcu, in fringilla diam elit non urna.'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    reordered() {
        console.log('Reordered panels: %O', this.panels);
    }
}
