import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
    selector: 'app-lists-example',
    templateUrl: './lists-example.component.html',
    styleUrls: ['./lists-example.component.scss']
})
export class ListsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-lists.component.html': require('!raw-loader!./examples/standard-lists.component.html'),
        'standard-lists.component.scss': require('!raw-loader!./examples/standard-lists.component.scss'),
        'standard-lists.component.ts': require('!raw-loader!./examples/standard-lists.component.ts'),
        'standard-lists.module.ts': require('!raw-loader!./examples/standard-lists.module.ts'),

        'list-with-icons.component.html': require('!raw-loader!./examples/list-with-icons.component.html'),
        'list-with-icons.component.scss': require('!raw-loader!./examples/list-with-icons.component.scss'),
        'list-with-icons.component.ts': require('!raw-loader!./examples/list-with-icons.component.ts'),
        'list-with-icons.module.ts': require('!raw-loader!./examples/list-with-icons.module.ts'),

        'items-as-links.component.html': require('!raw-loader!./examples/items-as-links.component.html'),
        'items-as-links.component.scss': require('!raw-loader!./examples/items-as-links.component.scss'),
        'items-as-links.component.ts': require('!raw-loader!./examples/items-as-links.component.ts'),
        'items-as-links.module.ts': require('!raw-loader!./examples/items-as-links.module.ts'),

        'items-as-buttons.component.html': require('!raw-loader!./examples/items-as-buttons.component.html'),
        'items-as-buttons.component.scss': require('!raw-loader!./examples/items-as-buttons.component.scss'),
        'items-as-buttons.component.ts': require('!raw-loader!./examples/items-as-buttons.component.ts'),
        'items-as-buttons.module.ts': require('!raw-loader!./examples/items-as-buttons.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
