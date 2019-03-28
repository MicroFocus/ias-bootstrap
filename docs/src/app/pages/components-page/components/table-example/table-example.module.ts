import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ColumnResizingTablesModule } from './column-resizing-tables/column-resizing-tables.module';
import { TableExampleComponent } from './table-example.component';
import { HoverActionsTablesModule } from './hover-actions-tables/hover-actions-tables.module';
import { SimpleTableModule } from './simple-table/simple-table.module';
import { StandardTablesModule } from './standard-tables/standard-tables.module';

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
