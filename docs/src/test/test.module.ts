import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AccordionModule, CheckboxModule } from '@ux-aspects/ux-aspects';
import { AccordionBasicComponent } from '../app/pages/components-page/components/accordion-example/examples/accordion-basic';
import { TextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/text-buttons';
import { IconButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-buttons';
import { IconTextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-text-buttons';
import { CheckboxesComponent } from '../app/pages/components-page/components/form-field-example/examples/checkboxes';
import { RadioButtonsComponent } from '../app/pages/components-page/components/form-field-example/examples/radio-buttons';
import { PanelExamplesComponent } from '../app/pages/components-page/components/panels-example/examples/panel-examples';

@NgModule({
    declarations: [
        TestComponent,
        LandingPageComponent,
        AccordionBasicComponent,
        TextButtonsComponent,
        IconButtonsComponent,
        IconTextButtonsComponent,
        CheckboxesComponent,
        RadioButtonsComponent,
        PanelExamplesComponent,
    ],
    imports: [
        BrowserModule,
        TestRoutingModule,
        AccordionModule,
        CheckboxModule,
    ],
    providers: [
    ],
    bootstrap: [TestComponent]
})
export class TestModule {
}
