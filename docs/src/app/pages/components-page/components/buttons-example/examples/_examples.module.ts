import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonsComponent } from './text-buttons';
import { SpecialTextButtonsComponent } from './special-text-buttons';

@NgModule({
    declarations: [
        TextButtonsComponent,
        SpecialTextButtonsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextButtonsComponent,
        SpecialTextButtonsComponent
    ]
})
export class ButtonsExamplesModule {
}
