import { NgModule } from '@angular/core';

import { BasicFormModule } from './basic-form/basic-form.module';
import { FormFieldExampleComponent } from './form-field-example.component';
import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadioButtonsModule } from './radio-buttons/radio-buttons.module';
import { SearchFieldModule } from './search-field/search-field.module';

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
