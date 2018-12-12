import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AccordionExampleComponent } from './pages/components-page/components/accordion-example/accordion-example.component';
import { ButtonsExampleComponent } from './pages/components-page/components/buttons-example/buttons-example.component';
import { DialogsExampleComponent } from './pages/components-page/components/dialogs-example/dialogs-example.component';
import { DatePickerExampleComponent } from './pages/components-page/components/date-picker-example/date-picker-example.component';

const routes: Routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'project', component: ProjectPageComponent },
    {
        path: 'components',
        component: ComponentsPageComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'accordion', component: AccordionExampleComponent },
            { path: 'buttons', component: ButtonsExampleComponent },
            { path: 'date-picker', component: DatePickerExampleComponent },
            { path: 'dialogs', component: DialogsExampleComponent },
        //     { path: 'form-field', component: FormFieldComponent },
        //     { path: 'form-validation', component: FormValidationComponent },
        //     { path: 'icon', component: IconComponent },
        //     { path: 'menu', component: MenuComponent },
        //     { path: 'side-nav', component: SideNavComponent },
        //     { path: 'table', component: TableComponent },
        //     { path: 'tabs', component: TabsComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
