import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerModule, AccordionModule, CheckboxModule, PopoverModule } from '@ux-aspects/ux-aspects';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatePickerBasicComponent } from './date-picker-basic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePickerAdvancedComponent } from './date-picker-advanced';

@NgModule({
    declarations: [
        DatePickerBasicComponent,
        DatePickerAdvancedComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        DateTimePickerModule,
        AccordionModule,
        CheckboxModule,
        PopoverModule,
        ModalModule.forRoot()
    ],
    exports: [
        DatePickerBasicComponent,
        DatePickerAdvancedComponent,
    ]
})
export class DatePickerExamplesModule {
}
