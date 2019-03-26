import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorServiceModule as GlobalColorServiceModule, colorSets, ColorService } from '@ux-aspects/ux-aspects';
import { SelectModule, CheckboxModule, RadioButtonModule, NumberPickerModule, AccordionModule } from '@ux-aspects/ux-aspects';
import { SelectFieldsComponent } from './select-fields';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SelectFieldsComponent,
    ],
    imports: [
        CommonModule,
        GlobalColorServiceModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SelectModule,
        CheckboxModule,
        RadioButtonModule,
        NumberPickerModule,
        AccordionModule
    ],
    exports: [
        SelectFieldsComponent,
    ]
})
export class FormFieldsAdvancedExamplesModule {
    constructor(colorService: ColorService) {
        colorService.setColorSet(colorSets.microFocus);
    }
}
