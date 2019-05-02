import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IASMarqueeWizardComponent } from './marquee-wizard.component';
import { AccessibilityModule, CheckboxModule, ColorServiceModule, colorSets, FocusIfModule, MarqueeWizardModule,
        RadioButtonModule, WizardModule } from '@ux-aspects/ux-aspects';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
    declarations: [
        IASMarqueeWizardComponent,
    ],
    imports: [
        A11yModule,
        AccessibilityModule,
        BrowserModule,
        BrowserAnimationsModule,
        CheckboxModule,
        ColorServiceModule.forRoot(colorSets.keppel),
        CommonModule,
        FocusIfModule,
        FormsModule,
        MarqueeWizardModule,
        ModalModule.forRoot(),
        RadioButtonModule,
        ReactiveFormsModule,
        WizardModule
    ],
    exports: [
        IASMarqueeWizardComponent,
    ]
})
export class IASMarqueeWizardModule {

}
