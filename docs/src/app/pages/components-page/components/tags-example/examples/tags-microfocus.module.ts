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
import { TagsMicrofocusComponent } from './tags-microfocus.component';

@NgModule({
    declarations: [
        TagsMicrofocusComponent,
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
        TagsMicrofocusComponent
    ]
})
export class TagsMicrofocusModule {
}
