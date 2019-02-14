import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {
    exampleFiles = {
        'standard-tables.html': require('!raw-loader!./examples/standard-tables.html'),
        'standard-tables.ts': require('!raw-loader!./examples/standard-tables.ts'),
        'standard-tables.scss': require('!raw-loader!./examples/standard-tables.scss'),
        'column-resizing-tables.html': require('!raw-loader!./examples/column-resizing-tables.html'),
        'column-resizing-tables.ts': require('!raw-loader!./examples/column-resizing-tables.ts'),
        'column-resizing-tables.scss': require('!raw-loader!./examples/column-resizing-tables.scss'),
        'hover-actions-tables.html': require('!raw-loader!./examples/hover-actions-tables.html'),
        'hover-actions-tables.ts': require('!raw-loader!./examples/hover-actions-tables.ts'),
        'hover-actions-tables.scss': require('!raw-loader!./examples/hover-actions-tables.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
