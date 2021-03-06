import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss']
})
export class TableExampleComponent implements OnInit {
    exampleFiles = {
        'simple-table.component.html': require('!raw-loader!./simple-table/simple-table.component.html'),
        'simple-table.component.scss': require('!raw-loader!./simple-table/simple-table.component.scss'),
        'simple-table.component.ts': require('!raw-loader!./simple-table/simple-table.component.ts'),
        'simple-table.module.ts': require('!raw-loader!./simple-table/simple-table.module.ts'),

        'standard-tables.component.html': require('!raw-loader!./standard-tables/standard-tables.component.html'),
        'standard-tables.component.scss': require('!raw-loader!./standard-tables/standard-tables.component.scss'),
        'standard-tables.component.ts': require('!raw-loader!./standard-tables/standard-tables.component.ts'),
        'standard-tables.module.ts': require('!raw-loader!./standard-tables/standard-tables.module.ts'),

        'column-resizing-tables.component.html': require('!raw-loader!./column-resizing-tables/column-resizing-tables.component.html'),
        'column-resizing-tables.component.scss': require('!raw-loader!./column-resizing-tables/column-resizing-tables.component.scss'),
        'column-resizing-tables.component.ts': require('!raw-loader!./column-resizing-tables/column-resizing-tables.component.ts'),
        'column-resizing-tables.module.ts': require('!raw-loader!./column-resizing-tables/column-resizing-tables.module.ts'),

        'hover-actions-tables.component.html': require('!raw-loader!./hover-actions-tables/hover-actions-tables.component.html'),
        'hover-actions-tables.component.scss': require('!raw-loader!./hover-actions-tables/hover-actions-tables.component.scss'),
        'hover-actions-tables.component.ts': require('!raw-loader!./hover-actions-tables/hover-actions-tables.component.ts'),
        'hover-actions-tables.module.ts': require('!raw-loader!./hover-actions-tables/hover-actions-tables.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
