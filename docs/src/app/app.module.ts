import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavigationModule, PageHeaderModule, SidePanelModule, TabsetModule } from '@ux-aspects/ux-aspects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { TipsPageComponent } from './pages/tips-page/tips-page.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { StandardLayoutComponent } from './pages/tips-page/components/standard-layout/standard-layout.component';
import { LoginPageComponent } from './pages/tips-page/components/login-page/login-page.component';
import { LoginPageExamplesModule } from './pages/tips-page/components/login-page/examples/_examples.module';
import { StandardLayoutsModule } from './pages/tips-page/components/standard-layout/examples/_examples.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonComponentsModule } from './components/common-components.module';
import { ComponentsPageModule } from './pages/components-page/components-page.module';
import { ExamplePageBoundaryComponent } from './pages/tips-page/components/example-page-boundary/example-page-boundary.component';
import { LandingPageComponent } from './pages/tips-page/components/landing-page/landing-page.component';
import { LandingPageExamplesModule } from './pages/tips-page/components/landing-page/examples/_examples.module';
import { PanelLayoutComponent } from './pages/tips-page/components/panel-layout/panel-layout.component';
import { PanelLayoutExampleModule } from './pages/tips-page/components/panel-layout/examples/_example.module';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsPageComponent,
        TipsPageComponent,
        GettingStartedComponent,
        StandardLayoutComponent,
        LandingPageComponent,
        LoginPageComponent,
        ExamplePageBoundaryComponent,
        PanelLayoutComponent,
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
        LandingPageExamplesModule,
        LoginPageExamplesModule,
        PanelLayoutExampleModule,
        StandardLayoutsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
