import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '@ux-aspects/ux-aspects';
import { FieldByFieldComponent } from './field-by-field';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FieldByFieldComponent
    ],
    imports: [
        CommonModule,
        CheckboxModule,
        FormsModule
    ],
    exports: [
        FieldByFieldComponent
    ]
})
export class FormValidationExamplesModule {
}
