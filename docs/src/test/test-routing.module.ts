import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/text-buttons';
import { IconButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-buttons';
import { IconTextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-text-buttons';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CheckboxesComponent } from '../app/pages/components-page/components/form-field-example/examples/checkboxes';
import { RadioButtonsComponent } from '../app/pages/components-page/components/form-field-example/examples/radio-buttons';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'text-buttons', component: TextButtonsComponent },
    { path: 'icon-buttons', component: IconButtonsComponent },
    { path: 'icon-text-buttons', component: IconTextButtonsComponent },
    { path: 'checkboxes', component: CheckboxesComponent },
    { path: 'radio-buttons', component: RadioButtonsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule {
}
