import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ListsExampleComponent } from './lists-example.component';
import { ItemsAsButtonsModule } from './examples/items-as-buttons.module';
import { ItemsAsLinksModule } from './examples/items-as-links.module';
import { ListWithIconsModule } from './examples/list-with-icons.module';
import { StandardListsModule } from './examples/standard-lists.module';

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
