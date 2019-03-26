import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicFormComponent } from './basic-form';
import { CheckboxesComponent } from './checkboxes';
import { RadioButtonsComponent } from './radio-buttons';
import { SearchFieldComponent } from './search-field';

@NgModule({
    declarations: [
        BasicFormComponent,
        SearchFieldComponent,
        CheckboxesComponent,
        RadioButtonsComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    exports: [
        BasicFormComponent,
        SearchFieldComponent,
        CheckboxesComponent,
        RadioButtonsComponent,
    ]
})
export class FormFieldsExamplesModule {
    constructor() {
    }
}
