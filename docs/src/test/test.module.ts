import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { PanelExamplesModule } from '../app/pages/components-page/components/panels-example/examples/panel-examples.module';
import { TabsExamplesModule } from '../app/pages/components-page/components/tabs-example/examples/_examples.module';
import { FormFieldExampleModule } from '../app/pages/components-page/components/form-field-example/form-field-example.module';
import { AccordionBasicModule } from '../app/pages/components-page/components/accordion-example/examples/accordion-basic.module';
import { ButtonsExampleModule } from '../app/pages/components-page/components/buttons-example/buttons-example.module';
import { TableExampleModule } from '../app/pages/components-page/components/table-example/table-example.module';

@NgModule({
    declarations: [
        TestComponent,
        LandingPageComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        TestRoutingModule,
        PanelExamplesModule,
        TabsExamplesModule,
        TableExampleModule,

        FormFieldExampleModule,
        AccordionBasicModule,
        ButtonsExampleModule
    ],
    providers: [
    ],
    bootstrap: [TestComponent]
})
export class TestModule {
}
