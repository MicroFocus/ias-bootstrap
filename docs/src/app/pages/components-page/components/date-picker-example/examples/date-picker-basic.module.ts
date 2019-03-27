import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, CheckboxModule, DateTimePickerModule, PopoverModule } from '@ux-aspects/ux-aspects';
import { FormsModule } from '@angular/forms';
import { DatePickerBasicComponent } from './date-picker-basic.component';

@NgModule({
    declarations: [
        DatePickerBasicComponent
    ],
    imports: [
        CommonModule,
        DateTimePickerModule,
        PopoverModule,
        FormsModule,
    ],
    exports: [
        DatePickerBasicComponent
    ]
})
export class DatePickerBasicModule {
    constructor() {
    }
}
