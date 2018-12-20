import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
    selector: 'app-lists-example',
    templateUrl: './lists-example.component.html',
    styleUrls: ['./lists-example.component.scss']
})
export class ListsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-lists.html': require('!raw-loader!./examples/standard-lists.html'),
        'standard-lists.ts': require('!raw-loader!./examples/standard-lists.ts'),
        'standard-lists.scss': require('!raw-loader!./examples/standard-lists.scss'),
        'list-with-icons.html': require('!raw-loader!./examples/list-with-icons.html'),
        'list-with-icons.ts': require('!raw-loader!./examples/list-with-icons.ts'),
        'list-with-icons.scss': require('!raw-loader!./examples/list-with-icons.scss'),
        'items-as-links.html': require('!raw-loader!./examples/items-as-links.html'),
        'items-as-links.ts': require('!raw-loader!./examples/items-as-links.ts'),
        'items-as-links.scss': require('!raw-loader!./examples/items-as-links.scss'),
        'items-as-buttons.html': require('!raw-loader!./examples/items-as-buttons.html'),
        'items-as-buttons.ts': require('!raw-loader!./examples/items-as-buttons.ts'),
        'items-as-buttons.scss': require('!raw-loader!./examples/items-as-buttons.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
