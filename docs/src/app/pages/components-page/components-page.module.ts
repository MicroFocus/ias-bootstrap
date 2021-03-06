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
import { PanelsExampleModule } from './components/panels-example/panels-example.module';
import { ProgressExampleModule } from './components/progress-example/progress-example.module';
import { SideNavsExampleModule } from './components/side-navs-example/side-navs-example.module';
import { StatusMessagesExampleModule } from './components/status-messages-example/status-messages-example.module';
import { TableExampleModule } from './components/table-example/table-example.module';
import { TabsExampleModule } from './components/tabs-example/tabs-example.module';
import { TagsExampleModule } from './components/tags-example/tags-example.module';
import { TilesExampleModule } from './components/tiles-example/tiles-example.module';
import { SidePanelsExampleModule } from './components/side-panels-example/side-panels-example.module';
import { WizardExampleModule } from './components/wizard-example/wizard-example.module';
import { ActivityIndicatorExampleModule } from './components/activity-indicator-example/activity-indicator-example.module';
import { ColorPickerExampleModule } from './components/color-picker-example/color-picker-example.module';
import { DashboardExampleModule } from './components/dashboard-example/dashboard-example.module';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        // Component example modules:
        AccordionExampleModule,
        ActivityIndicatorExampleModule,
        AppBarExampleModule,
        ButtonsExampleModule,
        ColorPickerExampleModule,
        DashboardExampleModule,
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
        PanelsExampleModule,
        ProgressExampleModule,
        SideNavsExampleModule,
        SidePanelsExampleModule,
        StatusMessagesExampleModule,
        TableExampleModule,
        TabsExampleModule,
        TagsExampleModule,
        TilesExampleModule,
        WizardExampleModule,
    ],
    exports: [
    ]
})
export class ComponentsPageModule {
    constructor() {
    }
}
