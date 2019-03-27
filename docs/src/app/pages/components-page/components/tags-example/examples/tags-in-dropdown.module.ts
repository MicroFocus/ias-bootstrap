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
import { TagsInDropdownComponent } from './tags-in-dropdown.component';

@NgModule({
    declarations: [
        TagsInDropdownComponent,
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
        TagsInDropdownComponent,
    ]
})
export class TagsInDropdownModule {
}
