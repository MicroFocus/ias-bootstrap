import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table.component';

@NgModule({
    declarations: [
        SimpleTableComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SimpleTableComponent,
    ]
})
export class SimpleTableModule {
}
