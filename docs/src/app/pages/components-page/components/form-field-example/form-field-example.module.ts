import { NgModule } from '@angular/core';

import { BasicFormModule } from './examples/basic-form.module';
import { FormFieldExampleComponent } from './form-field-example.component';
import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { CheckboxesModule } from './examples/checkboxes.module';
import { RadioButtonsModule } from './examples/radio-buttons.module';
import { SearchFieldModule } from './examples/search-field.module';

@NgModule({
    declarations: [
        FormFieldExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        BasicFormModule,
        CheckboxesModule,
        RadioButtonsModule,
        SearchFieldModule
    ],
    exports: [
        FormFieldExampleComponent,
    ]
})
export class FormFieldExampleModule {
    constructor() {
    }
}
