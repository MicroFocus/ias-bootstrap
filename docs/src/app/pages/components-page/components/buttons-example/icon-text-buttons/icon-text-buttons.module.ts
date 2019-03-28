import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTextButtonsComponent } from './icon-text-buttons.component';

@NgModule({
    declarations: [
        IconTextButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        IconTextButtonsComponent
    ]
})
export class IconTextButtonsModule {
    constructor() {
    }
}
