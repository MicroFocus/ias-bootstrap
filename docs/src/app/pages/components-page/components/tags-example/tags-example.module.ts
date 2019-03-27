import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { TagsExampleComponent } from './tags-example.component';
import { TagsInComboboxModule } from './examples/tags-in-combobox.module';
import { TagsInDropdownModule } from './examples/tags-in-dropdown.module';
import { TagsMicrofocusModule } from './examples/tags-microfocus.module';

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
