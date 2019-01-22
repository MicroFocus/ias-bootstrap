import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AccordionModule, CheckboxModule, NumberPickerModule, RadioButtonModule, SelectModule, TagInputModule,
    TypeaheadModule } from '@ux-aspects/ux-aspects';
import { TagsInComboboxComponent } from './tags-in-combobox';
import { TagsInDropdownComponent } from './tags-in-dropdown';
// import { TagsMicrofocusComponent } from './tags-microfocus.component';

@NgModule({
    declarations: [
        TagsInComboboxComponent,
        TagsInDropdownComponent,
        // TagsMicrofocusComponent,
    ],
    imports: [
        AccordionModule,
        CheckboxModule,
        CommonModule,
        FormsModule,
        NumberPickerModule,
        RadioButtonModule,
        SelectModule,
        TagInputModule,
        TypeaheadModule
    ],
    exports: [
        TagsInComboboxComponent,
        TagsInDropdownComponent,
        // TagsMicrofocusComponent
    ]
})
export class TagsExamplesModule {
}
