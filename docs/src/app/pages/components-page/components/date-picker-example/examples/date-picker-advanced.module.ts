import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerAdvancedComponent } from './date-picker-advanced.component';
import { AccordionModule, CheckboxModule, DateTimePickerModule, PopoverModule } from '@ux-aspects/ux-aspects';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DatePickerAdvancedComponent
    ],
    imports: [
        CommonModule,
        DateTimePickerModule,
        PopoverModule,
        FormsModule,
        CheckboxModule,
        AccordionModule,
    ],
    exports: [
        DatePickerAdvancedComponent
    ]
})
export class DatePickerAdvancedModule {
    constructor() {
    }
}
