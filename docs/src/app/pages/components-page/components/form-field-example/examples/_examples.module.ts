import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '@ux-aspects/ux-aspects';
import { BasicFormComponent } from './basic-form';
import { HorizontalFormComponent } from './horizontal-form';
import { SearchFieldComponent } from './search-field';

@NgModule({
    declarations: [
        BasicFormComponent,
        HorizontalFormComponent,
        SearchFieldComponent
    ],
    imports: [
        CommonModule,
        CheckboxModule
    ],
    exports: [
        BasicFormComponent,
        HorizontalFormComponent,
        SearchFieldComponent
    ]
})
export class FormFieldsExamplesModule {
}
