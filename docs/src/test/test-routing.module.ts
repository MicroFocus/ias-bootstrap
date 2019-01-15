import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/text-buttons';
import { IconButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-buttons';
import { IconTextButtonsComponent } from '../app/pages/components-page/components/buttons-example/examples/icon-text-buttons';


const routes: Routes = [
    { path: 'text-buttons', component: TextButtonsComponent },
    { path: 'icon-buttons', component: IconButtonsComponent },
    { path: 'icon-text-buttons', component: IconTextButtonsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule {
}
