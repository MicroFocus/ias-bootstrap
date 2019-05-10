import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AccessibilityModule,
    AccordionModule,
    FloatingActionButtonsModule,
    RadioButtonModule,
    TooltipModule
} from '@ux-aspects/ux-aspects';
import { FloatingActionButtonsComponent } from './floating-action-buttons.component';


@NgModule({
    declarations: [
        FloatingActionButtonsComponent
    ],
    imports: [
        AccessibilityModule,
        AccordionModule,
        BrowserAnimationsModule,
        CommonModule,
        FloatingActionButtonsModule,
        FormsModule,
        RadioButtonModule,
        ReactiveFormsModule,
        TooltipModule,
    ],
    exports: [
        FloatingActionButtonsComponent
    ]
})
export class IASFloatingActionButtonsModule {
    constructor() {
    }
}
