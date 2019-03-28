import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    AccordionModule,
    CheckboxModule,
    NumberPickerModule,
    RadioButtonModule,
    SelectModule,
    TagInputModule,
    TypeaheadModule
} from '@ux-aspects/ux-aspects';
import { TagsInComboboxComponent } from './tags-in-combobox.component';

@NgModule({
    declarations: [
        TagsInComboboxComponent,
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
    ]
})
export class TagsInComboboxModule {
}
