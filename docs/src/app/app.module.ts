import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PageHeaderModule, TabsetModule, SidePanelModule, NavigationModule } from '@ux-aspects/ux-aspects';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { TipsPageComponent } from './pages/tips-page/tips-page.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { SideNavsExampleComponent } from './pages/components-page/components/side-navs-example/side-navs-example.component';
import { StatusMessagesExampleComponent } from './pages/components-page/components/status-messages-example/status-messages-example.component';
import { TableExampleComponent } from './pages/components-page/components/table-example/table-example.component';
import { TabsExampleComponent } from './pages/components-page/components/tabs-example/tabs-example.component';
import { TagsExampleComponent } from './pages/components-page/components/tags-example/tags-example.component';
import { TilesExampleComponent } from './pages/components-page/components/tiles-example/tiles-example.component';
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
import { CommonComponentsModule } from './components/common-components.module';
import { ComponentsPageModule } from './pages/components-page/components-page.module';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsPageComponent,
        TipsPageComponent,
        GettingStartedComponent,
        SideNavsExampleComponent,
        StatusMessagesExampleComponent,
        TableExampleComponent,
        TabsExampleComponent,
        TagsExampleComponent,
        TilesExampleComponent,
        StandardLayoutComponent,
        LoginPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageHeaderModule,
        SidePanelModule,
        NavigationModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        TabsetModule,

        CommonComponentsModule,
        ComponentsPageModule,

        // Component example modules:
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
