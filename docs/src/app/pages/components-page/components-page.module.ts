import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../../components/common-components.module';
import { AccordionExampleModule } from './components/accordion-example/accordion-example.module';
import { FormFieldExampleModule } from './components/form-field-example/form-field-example.module';
import { AppBarExampleModule } from './components/app-bar-example/app-bar-example.module';
import { ButtonsExampleModule } from './components/buttons-example/buttons-example.module';
import { DatePickerExampleModule } from './components/date-picker-example/date-picker-example.module';
import { DialogsExampleModule } from './components/dialogs-example/dialogs-example.module';
import { FormFieldAdvancedExampleModule } from './components/form-field-advanced-example/form-field-advanced-example.module';
import { FormValidationExampleModule } from './components/form-validation-example/form-validation-example.module';
import { HeadersExampleModule } from './components/headers-example/headers-example.module';
import { IconsExampleModule } from './components/icons-example/icons-example.module';
import { LinksExampleModule } from './components/links-example/links-example.module';
import { ListsExampleModule } from './components/lists-example/lists-example.module';
import { MenuExampleModule } from './components/menu-example/menu-example.module';

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
        DatePickerExampleModule,
        DialogsExampleModule,
        FormFieldAdvancedExampleModule,
        FormFieldExampleModule,
        FormValidationExampleModule,
        HeadersExampleModule,
        IconsExampleModule,
        LinksExampleModule,
        ListsExampleModule,
        MenuExampleModule,
    ],
    exports: [
    ]
})
export class ComponentsPageModule {
    constructor() {
    }
}
