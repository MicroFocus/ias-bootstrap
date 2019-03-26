import { NgModule } from '@angular/core';

import { BasicFormModule } from './examples/basic-form.module';
import { FormFieldExampleComponent } from './form-field-example.component';
import { CommonComponentsModule } from '../../../../components/common-components.module';
import { SearchFieldComponent } from './examples/search-field';
import { CheckboxesComponent } from './examples/checkboxes';
import { RadioButtonsComponent } from './examples/radio-buttons';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormFieldExampleComponent,
        SearchFieldComponent,
        CheckboxesComponent,
        RadioButtonsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        CommonComponentsModule,
        BasicFormModule
    ],
    exports: [
        FormFieldExampleComponent,
        SearchFieldComponent,
        CheckboxesComponent,
        RadioButtonsComponent,
    ]
})
export class FormFieldExampleModule {
    constructor() {
    }
}
