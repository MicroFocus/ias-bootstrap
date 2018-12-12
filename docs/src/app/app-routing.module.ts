import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { AccordionExampleComponent } from './pages/components-page/components/accordion-example/accordion-example.component';
import { ButtonsExampleComponent } from './pages/components-page/components/buttons-example/buttons-example.component';
import { DialogsExampleComponent } from './pages/components-page/components/dialogs-example/dialogs-example.component';
import { DatePickerExampleComponent } from './pages/components-page/components/date-picker-example/date-picker-example.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { TipsPageComponent } from './pages/tips-page/tips-page.component';
import { AppBarExampleComponent } from './pages/components-page/components/app-bar-example/app-bar-example.component';
import { CommentsExampleComponent } from './pages/components-page/components/comments-example/comments-example.component';
import { FormFieldExampleComponent } from './pages/components-page/components/form-field-example/form-field-example.component';
import { FormValidationExampleComponent } from './pages/components-page/components/form-validation-example/form-validation-example.component';
import { HeadersExampleComponent } from './pages/components-page/components/headers-example/headers-example.component';
import { IconsExampleComponent } from './pages/components-page/components/icons-example/icons-example.component';
import { LinksExampleComponent } from './pages/components-page/components/links-example/links-example.component';
import { ListsExampleComponent } from './pages/components-page/components/lists-example/lists-example.component';
import { MenuExampleComponent } from './pages/components-page/components/menu-example/menu-example.component';
import { PanelsExampleComponent } from './pages/components-page/components/panels-example/panels-example.component';
import { SideNavsExampleComponent } from './pages/components-page/components/side-navs-example/side-navs-example.component';
import { StatusMessagesExampleComponent } from './pages/components-page/components/status-messages-example/status-messages-example.component';
import { TableExampleComponent } from './pages/components-page/components/table-example/table-example.component';
import { TabsExampleComponent } from './pages/components-page/components/tabs-example/tabs-example.component';
import { TagsExampleComponent } from './pages/components-page/components/tags-example/tags-example.component';
import { TilesExampleComponent } from './pages/components-page/components/tiles-example/tiles-example.component';
import { TileGridsExampleComponent } from './pages/components-page/components/tile-grids-example/tile-grids-example.component';
import { ProgressExampleComponent } from './pages/components-page/components/progress-example/progress-example.component';

const routes: Routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'getting-started', component: GettingStartedComponent },
    {
        path: 'components',
        component: ComponentsPageComponent,
        children: [
            { path: '', redirectTo: 'accordion', pathMatch: 'full' },
            { path: 'accordion', component: AccordionExampleComponent },
            { path: 'app-bar', component: AppBarExampleComponent },
            { path: 'buttons', component: ButtonsExampleComponent },
            { path: 'comments', component: CommentsExampleComponent },
            { path: 'date-picker', component: DatePickerExampleComponent },
            { path: 'dialogs', component: DialogsExampleComponent },
            { path: 'form-field', component: FormFieldExampleComponent },
            { path: 'form-validation', component: FormValidationExampleComponent },
            { path: 'headers', component: HeadersExampleComponent },
            { path: 'icons', component: IconsExampleComponent },
            { path: 'links', component: LinksExampleComponent },
            { path: 'lists', component: ListsExampleComponent },
            { path: 'menu', component: MenuExampleComponent },
            { path: 'panels', component: PanelsExampleComponent },
            { path: 'progress', component: ProgressExampleComponent },
            { path: 'side-navs', component: SideNavsExampleComponent },
            { path: 'status-messages', component: StatusMessagesExampleComponent },
            { path: 'table', component: TableExampleComponent },
            { path: 'tabs', component: TabsExampleComponent },
            { path: 'tags', component: TagsExampleComponent },
            { path: 'tiles', component: TilesExampleComponent },
            { path: 'tile-grids', component: TileGridsExampleComponent }
        ]
    },
    { path: 'tips-and-tricks', component: TipsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
