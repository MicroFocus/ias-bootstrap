import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PageHeaderModule, TabsetModule, SidePanelModule, NavigationModule } from '@ux-aspects/ux-aspects';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ButtonsExampleComponent } from './pages/components-page/components/buttons-example/buttons-example.component';
import { DialogsExampleComponent } from './pages/components-page/components/dialogs-example/dialogs-example.component';
import { DatePickerExampleComponent } from './pages/components-page/components/date-picker-example/date-picker-example.component';
import { TipsPageComponent } from './pages/tips-page/tips-page.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { CommentsExampleComponent } from './pages/components-page/components/comments-example/comments-example.component';
import { FormValidationExampleComponent } from './pages/components-page/components/form-validation-example/form-validation-example.component';
import { HeadersExampleComponent } from './pages/components-page/components/headers-example/headers-example.component';
import { IconsExampleComponent } from './pages/components-page/components/icons-example/icons-example.component';
import { LinksExampleComponent } from './pages/components-page/components/links-example/links-example.component';
import { ListsExampleComponent } from './pages/components-page/components/lists-example/lists-example.component';
import { MenuExampleComponent } from './pages/components-page/components/menu-example/menu-example.component';
import { PanelsExampleComponent } from './pages/components-page/components/panels-example/panels-example.component';
import { SideNavsExampleComponent } from './pages/components-page/components/side-navs-example/side-navs-example.component';
import { StatusMessagesExampleComponent } from './pages/components-page/components/status-messages-example/status-messages-example.component';
import { TableExampleComponent } from './pages/components-page/components/table-example/table-example.component';
import { TabsExampleComponent } from './pages/components-page/components/tabs-example/tabs-example.component';
import { TagsExampleComponent } from './pages/components-page/components/tags-example/tags-example.component';
import { TilesExampleComponent } from './pages/components-page/components/tiles-example/tiles-example.component';
import { ButtonsExamplesModule } from './pages/components-page/components/buttons-example/examples/_examples.module';
import { ProgressExampleComponent } from './pages/components-page/components/progress-example/progress-example.component';
import { DatePickerExamplesModule } from './pages/components-page/components/date-picker-example/examples/_examples.module';
import { DialogsExamplesModule } from './pages/components-page/components/dialogs-example/examples/_examples.module';
import { FormValidationExamplesModule } from './pages/components-page/components/form-validation-example/examples/_examples.module';
import { HeadersExamplesModule } from './pages/components-page/components/headers-example/examples/_examples.module';
import { IconsExamplesModule } from './pages/components-page/components/icons-example/examples/_examples.module';
import { LinksExamplesModule } from './pages/components-page/components/links-example/examples/_examples.module';
import { ListExamplesModule } from './pages/components-page/components/lists-example/examples/_examples.module';
import { MenuExamplesModule } from './pages/components-page/components/menu-example/examples/_examples.module';
import { PanelExamplesModule } from './pages/components-page/components/panels-example/examples/_examples.module';
import { ProgressExamplesModule } from './pages/components-page/components/progress-example/examples/_examples.module';
import { SideNavExamplesModule } from './pages/components-page/components/side-navs-example/examples/_examples.module';
import { MessagesExamplesModule } from './pages/components-page/components/status-messages-example/examples/_examples.module';
import { TablesExamplesModule } from './pages/components-page/components/table-example/examples/_examples.module';
import { TabsExamplesModule } from './pages/components-page/components/tabs-example/examples/_examples.module';
import { TagsExamplesModule } from './pages/components-page/components/tags-example/examples/_examples.module';
import { TilesExamplesModule } from './pages/components-page/components/tiles-example/examples/_examples.module';
import { StandardLayoutComponent } from './pages/tips-page/components/standard-layout/standard-layout.component';
import { LoginPageComponent } from './pages/tips-page/components/login-page/login-page.component';
import { LoginPageExamplesModule } from './pages/tips-page/components/login-page/examples/_examples.module';
import { StandardLayoutsModule } from './pages/tips-page/components/standard-layout/examples/_examples.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormFieldAdvancedExampleComponent } from './pages/components-page/components/form-field-advanced-example/form-field-advanced-example.component';
import { FormFieldsAdvancedExamplesModule } from './pages/components-page/components/form-field-advanced-example/examples/_examples.module';
import { FormFieldExampleModule } from './pages/components-page/components/form-field-example/form-field-example.module';
import { CommonComponentsModule } from './components/common-components.module';
import { AccordionExampleModule } from './pages/components-page/components/accordion-example/accordion-example.module';
import { AppBarExampleModule } from './pages/components-page/components/app-bar-example/app-bar-example.module';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsPageComponent,
        ButtonsExampleComponent,
        DialogsExampleComponent,
        DatePickerExampleComponent,
        TipsPageComponent,
        GettingStartedComponent,
        CommentsExampleComponent,
        FormValidationExampleComponent,
        HeadersExampleComponent,
        IconsExampleComponent,
        LinksExampleComponent,
        ListsExampleComponent,
        MenuExampleComponent,
        PanelsExampleComponent,
        SideNavsExampleComponent,
        StatusMessagesExampleComponent,
        TableExampleComponent,
        TabsExampleComponent,
        TagsExampleComponent,
        TilesExampleComponent,
        ProgressExampleComponent,
        StandardLayoutComponent,
        LoginPageComponent,
        FormFieldAdvancedExampleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageHeaderModule,
        SidePanelModule,
        NavigationModule,
        // DateTimePickerModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsetModule,

        CommonComponentsModule,

        // Component page examples modules
        AccordionExampleModule,
        FormFieldExampleModule,
        AppBarExampleModule,

        // Component example modules:
        ButtonsExamplesModule,
        DatePickerExamplesModule,
        DialogsExamplesModule,
        FormFieldsAdvancedExamplesModule,
        FormValidationExamplesModule,
        HeadersExamplesModule,
        IconsExamplesModule,
        LinksExamplesModule,
        ListExamplesModule,
        MenuExamplesModule,
        PanelExamplesModule,
        ProgressExamplesModule,
        SideNavExamplesModule,
        MessagesExamplesModule,
        TablesExamplesModule,
        TabsExamplesModule,
        TagsExamplesModule,
        TilesExamplesModule,
        LoginPageExamplesModule,
        StandardLayoutsModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
