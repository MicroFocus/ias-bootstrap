import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { FormFieldAdvancedExampleComponent } from './form-field-advanced-example.component';
import { SelectFieldsModule } from './select-fields/select-fields.module';

@NgModule({
    declarations: [
        FormFieldAdvancedExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        SelectFieldsModule
    ],
    exports: [
        FormFieldAdvancedExampleComponent
    ]
})
export class FormFieldAdvancedExampleModule {
    constructor() {
    }
}
