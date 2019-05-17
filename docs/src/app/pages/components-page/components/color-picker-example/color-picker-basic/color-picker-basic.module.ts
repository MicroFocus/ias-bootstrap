import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccessibilityModule, AccordionModule, CheckboxModule,
    ColorPickerModule, ColorServiceModule, RadioButtonModule } from '@ux-aspects/ux-aspects';
import { ColorPickerBasicComponent } from './color-picker-basic.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
    declarations: [
        ColorPickerBasicComponent
    ],
    imports: [
        AccordionModule,
        AccessibilityModule,
        BrowserModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        CheckboxModule,
        ColorPickerModule,
        ColorServiceModule,
        CommonModule,
        FormsModule,
        RadioButtonModule,
        ReactiveFormsModule
    ],
    exports: [
        ColorPickerBasicComponent
    ],
    bootstrap: [ColorPickerBasicComponent]
})
export class ColorPickerBasicModule {
    constructor() {
    }
}
