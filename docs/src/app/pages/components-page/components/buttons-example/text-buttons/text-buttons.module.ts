import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonsComponent } from './text-buttons.component';

@NgModule({
    declarations: [
        TextButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TextButtonsComponent
    ]
})
export class TextButtonsModule {
    constructor() {
    }
}
