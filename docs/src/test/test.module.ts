import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ButtonsExamplesModule } from '../app/pages/components-page/components/buttons-example/examples/_examples.module';
import { PanelExamplesModule } from '../app/pages/components-page/components/panels-example/examples/_examples.module';
import { TabsExamplesModule } from '../app/pages/components-page/components/tabs-example/examples/_examples.module';
import { TablesExamplesModule } from '../app/pages/components-page/components/table-example/examples/_examples.module';
import { FormFieldExampleModule } from '../app/pages/components-page/components/form-field-example/form-field-example.module';
import { AccordionBasicModule } from '../app/pages/components-page/components/accordion-example/examples/accordion-basic.module';

@NgModule({
    declarations: [
        TestComponent,
        LandingPageComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        TestRoutingModule,
        ButtonsExamplesModule,
        PanelExamplesModule,
        TabsExamplesModule,
        TablesExamplesModule,

        FormFieldExampleModule,
        AccordionBasicModule,
    ],
    providers: [
    ],
    bootstrap: [TestComponent]
})
export class TestModule {
}
