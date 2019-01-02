import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PageHeaderModule, TabsetModule, SidePanelModule, NavigationModule } from '@ux-aspects/ux-aspects';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ButtonsExampleComponent } from './pages/components-page/components/buttons-example/buttons-example.component';
import { AccordionExampleComponent } from './pages/components-page/components/accordion-example/accordion-example.component';
import { DialogsExampleComponent } from './pages/components-page/components/dialogs-example/dialogs-example.component';
import { DatePickerExampleComponent } from './pages/components-page/components/date-picker-example/date-picker-example.component';
import { TipsPageComponent } from './pages/tips-page/tips-page.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { AppBarExampleComponent } from './pages/components-page/components/app-bar-example/app-bar-example.component';
import { CommentsExampleComponent } from './pages/components-page/components/comments-example/comments-example.component';
import { FormFieldExampleComponent } from './pages/components-page/components/form-field-example/form-field-example.component';
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
import { CodeComponent } from './components/code.component';
import { CodeHighlightService } from './services/code-highlight.service';
import { ExampleComponent } from './components/example/example.component';
import { ExampleFileComponent } from './components/example-file/example-file.component';
import { AccordionExamplesModule } from './pages/components-page/components/accordion-example/examples/_examples.module';
import { AppBarExamplesModule } from './pages/components-page/components/app-bar-example/examples/_examples.module';
import { DatePickerExamplesModule } from './pages/components-page/components/date-picker-example/examples/_examples.module';
import { DialogsExamplesModule } from './pages/components-page/components/dialogs-example/examples/_examples.module';
import { FormFieldsExamplesModule } from './pages/components-page/components/form-field-example/examples/_examples.module';
import { FormValidationExamplesModule } from './pages/components-page/components/form-validation-example/examples/_examples.module';
import { HeadersExamplesModule } from './pages/components-page/components/headers-example/examples/_examples.module';
import { IconsExamplesModule } from './pages/components-page/components/icons-example/examples/_examples.module';
import { LinksExamplesModule } from './pages/components-page/components/links-example/examples/_examples.module';
import { ListExamplesModule } from './pages/components-page/components/lists-example/examples/_examples.module';
import { MenuExamplesModule } from './pages/components-page/components/menu-example/examples/_examples.module';
import { PanelExamplesModule } from './pages/components-page/components/panels-example/examples/_examples.module';
import { ProgressExamplesModule } from './pages/components-page/components/progress-example/examples/_examples.module';
import { SideNavExamplesModule } from './pages/components-page/components/side-navs-example/examples/_examples.module';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { MessagesExamplesModule } from './pages/components-page/components/status-messages-example/examples/_examples.module';
import { TablesExamplesModule } from './pages/components-page/components/table-example/examples/_examples.module';
import { TabsExamplesModule } from './pages/components-page/components/tabs-example/examples/_examples.module';
import { TagsExamplesModule } from './pages/components-page/components/tags-example/examples/_examples.module';
import { TilesExamplesModule } from './pages/components-page/components/tiles-example/examples/_examples.module';

@NgModule({
    declarations: [
        AppComponent,
        CodeComponent,
        ComponentsPageComponent,
        ButtonsExampleComponent,
        AccordionExampleComponent,
        DialogsExampleComponent,
        DatePickerExampleComponent,
        TipsPageComponent,
        GettingStartedComponent,
        AppBarExampleComponent,
        CommentsExampleComponent,
        FormFieldExampleComponent,
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
        ExampleComponent,
        ExampleFileComponent,
        EmptyContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageHeaderModule,
        SidePanelModule,
        NavigationModule,
        // DateTimePickerModule,
        ModalModule.forRoot(),
        TabsetModule,

        // Component example modules:
        AccordionExamplesModule,
        AppBarExamplesModule,
        ButtonsExamplesModule,
        DatePickerExamplesModule,
        DialogsExamplesModule,
        FormFieldsExamplesModule,
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
    ],
    providers: [
        CodeHighlightService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
