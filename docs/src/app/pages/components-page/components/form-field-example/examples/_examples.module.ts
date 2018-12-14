import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '@ux-aspects/ux-aspects';
import { BasicFormComponent } from './basic-form';
import { HorizontalFormComponent } from './horizontal-form';

@NgModule({
    declarations: [
        BasicFormComponent,
        HorizontalFormComponent
    ],
    imports: [
        CommonModule,
        CheckboxModule
    ],
    exports: [
        BasicFormComponent,
        HorizontalFormComponent
    ]
})
export class FormFieldsExamplesModule {
}
