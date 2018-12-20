import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardListsComponent } from './standard-lists';
import { ListWithIconsComponent } from './list-with-icons';
import { ItemsAsLinksComponent } from './items-as-links';
import { ItemsAsButtonsComponent } from './items-as-buttons';

@NgModule({
    declarations: [
        StandardListsComponent,
        ListWithIconsComponent,
        ItemsAsLinksComponent,
        ItemsAsButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardListsComponent,
        ListWithIconsComponent,
        ItemsAsLinksComponent,
        ItemsAsButtonsComponent
    ]
})
export class ListExamplesModule {
}
