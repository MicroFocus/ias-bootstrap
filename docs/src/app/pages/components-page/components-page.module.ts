import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../../components/common-components.module';
import { AccordionExampleModule } from './components/accordion-example/accordion-example.module';
import { FormFieldExampleModule } from './components/form-field-example/form-field-example.module';
import { AppBarExampleModule } from './components/app-bar-example/app-bar-example.module';
import { ButtonsExampleModule } from './components/buttons-example/buttons-example.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        // Component example modules:
        AccordionExampleModule,
        AppBarExampleModule,
        ButtonsExampleModule,
        FormFieldExampleModule,
    ],
    exports: [
    ]
})
export class ComponentsPageModule {
    constructor() {
    }
}