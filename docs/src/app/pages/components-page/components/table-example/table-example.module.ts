import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ColumnResizingTablesModule } from './examples/column-resizing-tables.module';
import { TableExampleComponent } from './table-example.component';
import { HoverActionsTablesModule } from './examples/hover-actions-tables.module';
import { SimpleTableModule } from './examples/simple-table.module';
import { StandardTablesModule } from './examples/standard-tables.module';

@NgModule({
    declarations: [
        TableExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        ColumnResizingTablesModule,
        HoverActionsTablesModule,
        SimpleTableModule,
        StandardTablesModule
    ],
    exports: [
        TableExampleComponent
    ]
})
export class TableExampleModule {
    constructor() {
    }
}
