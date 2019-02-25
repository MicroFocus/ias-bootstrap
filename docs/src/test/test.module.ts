import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
    declarations: [
        TestComponent,
        LandingPageComponent
    ],
    imports: [
        BrowserModule,
        TestRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [TestComponent]
})
export class TestModule {
}
