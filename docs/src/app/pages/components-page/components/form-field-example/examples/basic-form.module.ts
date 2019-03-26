import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BasicFormComponent } from './basic-form.component';

@NgModule({
    declarations: [
        BasicFormComponent
    ],
    imports: [
        CommonModule,
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
