import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonsComponent } from './text-buttons';
import { IconButtonsComponent } from './icon-buttons';

@NgModule({
    declarations: [
        TextButtonsComponent,
        IconButtonsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextButtonsComponent,
        IconButtonsComponent
    ]
})
export class ButtonsExamplesModule {
}
