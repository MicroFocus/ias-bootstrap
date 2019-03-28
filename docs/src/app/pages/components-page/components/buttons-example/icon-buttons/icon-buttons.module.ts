import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonsComponent } from './icon-buttons.component';

@NgModule({
    declarations: [
        IconButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        IconButtonsComponent
    ]
})
export class IconButtonsModule {
    constructor() {
    }
}
