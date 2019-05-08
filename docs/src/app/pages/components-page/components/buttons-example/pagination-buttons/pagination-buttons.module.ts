import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '@ux-aspects/ux-aspects';
import { PaginationButtonsComponent } from './pagination-buttons.component';

@NgModule({
    declarations: [
        PaginationButtonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule
    ],
    exports: [
        PaginationButtonsComponent
    ]
})
export class PaginationButtonsModule {
    constructor() {
    }
}
