import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/text-buttons';
import { IconButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-buttons';
import { IconTextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-text-buttons';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CheckboxesComponent } from '../app/pages/components-page/components/form-field-example/examples/checkboxes';
import { RadioButtonsComponent } from '../app/pages/components-page/components/form-field-example/examples/radio-buttons';
import { AccordionBasicComponent } from '../app/pages/components-page/components/accordion-example/examples/accordion-basic';
import { PanelExamplesComponent } from '../app/pages/components-page/components/panels-example/examples/panel-examples';
import { StandardTabsComponent } from '../app/pages/components-page/components/tabs-example/examples/standard-tabs';
import { SearchFieldComponent } from '../app/pages/components-page/components/form-field-example/examples/search-field';
import { SimpleTableComponent } from '../app/pages/components-page/components/table-example/examples/simple-table';
import { BasicFormComponent } from '../app/pages/components-page/components/form-field-example/examples/basic-form.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'accordion', component: AccordionBasicComponent },
    { path: 'text-buttons', component: TextButtonsComponent },
    { path: 'icon-buttons', component: IconButtonsComponent },
    { path: 'icon-text-buttons', component: IconTextButtonsComponent },
    { path: 'checkboxes', component: CheckboxesComponent },
    { path: 'panels', component: PanelExamplesComponent },
    { path: 'radio-buttons', component: RadioButtonsComponent },
    { path: 'tabs', component: StandardTabsComponent },
    { path: 'tables', children: [
        { path: 'simple', component: SimpleTableComponent },
    ]},
    { path: 'form-fields', children: [
        { path: 'basic-form', component: BasicFormComponent },
        { path: 'search-field', component: SearchFieldComponent },
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule {
}
