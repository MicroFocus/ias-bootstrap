import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonsComponent } from './radio-buttons.component';


@NgModule({
    declarations: [
        RadioButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RadioButtonsComponent
    ]
})
export class RadioButtonsModule {
    constructor() {
    }
}
