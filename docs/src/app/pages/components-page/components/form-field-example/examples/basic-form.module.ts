import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicFormComponent } from './basic-form.component';

@NgModule({
    declarations: [
        BasicFormComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        BasicFormComponent
    ]
})
export class BasicFormModule {
    constructor() {
    }
}
