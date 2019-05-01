import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleWizardComponent } from './simple-wizard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccessibilityModule, AccordionModule, ColorServiceModule,
        RadioButtonModule, WizardModule } from '@ux-aspects/ux-aspects';

@NgModule({
    declarations: [
        SimpleWizardComponent,
    ],
    imports: [
        AccessibilityModule,
        AccordionModule,
        BrowserModule,
        ColorServiceModule,
        CommonModule,
        FormsModule,
        RadioButtonModule,
        ReactiveFormsModule,
        WizardModule
    ],
    exports: [
        SimpleWizardComponent,
    ]
})
export class SimpleWizardModule {

}
