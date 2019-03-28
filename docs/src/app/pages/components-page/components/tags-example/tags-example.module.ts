import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { TagsExampleComponent } from './tags-example.component';
import { TagsInComboboxModule } from './tags-in-combobox/tags-in-combobox.module';
import { TagsInDropdownModule } from './tags-in-dropdown/tags-in-dropdown.module';
import { TagsMicrofocusModule } from './tags-microfocus/tags-microfocus.module';

@NgModule({
    declarations: [
        TagsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        TagsInComboboxModule,
        TagsInDropdownModule,
        TagsMicrofocusModule,
    ],
    exports: [
        TagsExampleComponent
    ]
})
export class TagsExampleModule {
    constructor() {
    }
}
