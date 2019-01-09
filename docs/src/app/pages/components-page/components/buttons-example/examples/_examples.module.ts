import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonsComponent } from './text-buttons';
import { IconButtonsComponent } from './icon-buttons';
import { IconTextButtonsComponent } from './icon-text-buttons';

@NgModule({
    declarations: [
        TextButtonsComponent,
        IconButtonsComponent,
        IconTextButtonsComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextButtonsComponent,
        IconButtonsComponent,
        IconTextButtonsComponent,
    ]
})
export class ButtonsExamplesModule {
}
