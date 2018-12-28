import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardTablesComponent } from './standard-tables';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ColorServiceModule as GlobalColorServiceModule,
    TableModule,
    FixedHeaderTableModule
} from '@ux-aspects/ux-aspects';
import { CheckboxModule, ColumnSortingModule, SparkModule, SelectionModule } from '@ux-aspects/ux-aspects';
import { A11yModule } from '@angular/cdk/a11y';
import { ColumnResizingTablesComponent } from './column-resizing-tables';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
    declarations: [
        StandardTablesComponent,
        ColumnResizingTablesComponent,
    ],
    imports: [
        CommonModule,
        GlobalColorServiceModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CheckboxModule,
        ColumnSortingModule,
        SparkModule,
        SelectionModule,
        A11yModule,
        TableModule,
        FixedHeaderTableModule,
        ButtonsModule,
    ],
    exports: [
        StandardTablesComponent,
        ColumnResizingTablesComponent,
    ]
})
export class TablesExamplesModule {
}
