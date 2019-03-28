import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ListsExampleComponent } from './lists-example.component';
import { ItemsAsButtonsModule } from './items-as-buttons/items-as-buttons.module';
import { ItemsAsLinksModule } from './items-as-links/items-as-links.module';
import { ListWithIconsModule } from './list-with-icons/list-with-icons.module';
import { StandardListsModule } from './standard-lists/standard-lists.module';

@NgModule({
    declarations: [
        ListsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        ItemsAsButtonsModule,
        ItemsAsLinksModule,
        ListWithIconsModule,
        StandardListsModule,
    ],
    exports: [
        ListsExampleComponent
    ]
})
export class ListsExampleModule {
    constructor() {
    }
}
