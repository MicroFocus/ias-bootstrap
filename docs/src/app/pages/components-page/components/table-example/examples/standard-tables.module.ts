import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    CheckboxModule,
    ColorServiceModule as GlobalColorServiceModule,
    ColumnSortingModule,
    FixedHeaderTableModule,
    HoverActionModule,
    SelectionModule,
    SparkModule,
    TableModule
} from '@ux-aspects/ux-aspects';
import { A11yModule } from '@angular/cdk/a11y';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ColumnResizingTablesComponent } from './column-resizing-tables.component';
import { HoverActionsTablesComponent } from './hover-actions-tables.component';
import { StandardTablesComponent } from './standard-tables.component';
import { SimpleTableComponent } from './simple-table.component';

@NgModule({
    declarations: [
        StandardTablesComponent,
    ],
    imports: [
        A11yModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonsModule,
        CheckboxModule,
        ColumnSortingModule,
        CommonModule,
        FixedHeaderTableModule,
        FormsModule,
        GlobalColorServiceModule,
        HoverActionModule,
        ReactiveFormsModule,
        SparkModule,
        SelectionModule,
        TableModule,
    ],
    exports: [
        StandardTablesComponent,
    ]
})
export class StandardTablesModule {
}
