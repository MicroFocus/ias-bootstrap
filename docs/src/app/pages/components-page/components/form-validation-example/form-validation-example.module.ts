import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { FormValidationExampleComponent } from './form-validation-example.component';
import { FieldByFieldModule } from './field-by-field/field-by-field.module';

@NgModule({
    declarations: [
        FormValidationExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        FieldByFieldModule
    ],
    exports: [
        FormValidationExampleComponent,
    ]
})
export class FormValidationExampleModule {
    constructor() {
    }
}
