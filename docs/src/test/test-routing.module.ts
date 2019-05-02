import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextButtonsComponent } from '../app/pages/components-page/components/buttons-example/text-buttons/text-buttons.component';
import { IconButtonsComponent } from '../app/pages/components-page/components/buttons-example/icon-buttons/icon-buttons.component';
import { IconTextButtonsComponent } from '../app/pages/components-page/components/buttons-example/icon-text-buttons/icon-text-buttons.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CheckboxesComponent } from '../app/pages/components-page/components/form-field-example/checkboxes/checkboxes.component';
import { RadioButtonsComponent } from '../app/pages/components-page/components/form-field-example/radio-buttons/radio-buttons.component';
import { AccordionBasicComponent } from '../app/pages/components-page/components/accordion-example/accordion-basic/accordion-basic.component';
import { PanelExamplesComponent } from '../app/pages/components-page/components/panels-example/panel-examples/panel-examples.component';
import { StandardTabsComponent } from '../app/pages/components-page/components/tabs-example/standard-tabs/standard-tabs.component';
import { SearchFieldComponent } from '../app/pages/components-page/components/form-field-example/search-field/search-field.component';
import { SimpleTableComponent } from '../app/pages/components-page/components/table-example/simple-table/simple-table.component';
import { BasicFormComponent } from '../app/pages/components-page/components/form-field-example/basic-form/basic-form.component';
import { StandardSidePanelComponent } from '../app/pages/components-page/components/side-panels-example/standard-side-panel/standard-side-panel.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'accordion', component: AccordionBasicComponent },
    { path: 'text-buttons', component: TextButtonsComponent },
    { path: 'icon-buttons', component: IconButtonsComponent },
    { path: 'icon-text-buttons', component: IconTextButtonsComponent },
    { path: 'checkboxes', component: CheckboxesComponent },
    { path: 'panels', component: PanelExamplesComponent },
    { path: 'radio-buttons', component: RadioButtonsComponent },
    { path: 'side-panels', component: StandardSidePanelComponent },
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
