import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ColorServiceModule as GlobalColorServiceModule,
    TableModule,
    FixedHeaderTableModule
} from '@ux-aspects/ux-aspects';
import { CheckboxModule, ColumnSortingModule, HoverActionModule, SparkModule, SelectionModule } from '@ux-aspects/ux-aspects';
import { A11yModule } from '@angular/cdk/a11y';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ColumnResizingTablesComponent } from './column-resizing-tables';
import { HoverActionsTables } from './hover-actions-tables';
import { StandardTablesComponent } from './standard-tables';

@NgModule({
    declarations: [
        StandardTablesComponent,
        ColumnResizingTablesComponent,
        HoverActionsTables,
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
        ColumnResizingTablesComponent,
        HoverActionsTables,
        StandardTablesComponent,
    ]
})
export class TablesExamplesModule {
}
