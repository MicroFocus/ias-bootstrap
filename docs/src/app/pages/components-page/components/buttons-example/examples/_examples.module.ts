import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonsComponent } from './text-buttons';
import { SpecialTextButtonsComponent } from './special-text-buttons';
import { IconButtonsComponent } from './icon-buttons';

@NgModule({
    declarations: [
        TextButtonsComponent,
        SpecialTextButtonsComponent,
        IconButtonsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextButtonsComponent,
        SpecialTextButtonsComponent,
        IconButtonsComponent
    ]
})
export class ButtonsExamplesModule {
}
