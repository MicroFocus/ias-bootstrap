import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule, TagInputModule } from '@ux-aspects/ux-aspects';
import { TagsInComboboxComponent } from './tags-in-combobox';
import { TagsInDropdownComponent } from './tags-in-dropdown';

@NgModule({
    declarations: [
        TagsInComboboxComponent,
        TagsInDropdownComponent,
    ],
    imports: [
        CommonModule,
        SelectModule,
        TagInputModule,
    ],
    exports: [
        TagsInComboboxComponent,
        TagsInDropdownComponent,
    ]
})
export class TagsExamplesModule {
}
