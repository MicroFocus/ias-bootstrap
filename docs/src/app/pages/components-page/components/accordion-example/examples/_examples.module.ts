import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasicComponent } from './accordion-basic';
import { AccordionModule, CheckboxModule } from '@ux-aspects/ux-aspects';

@NgModule({
    declarations: [
        AccordionBasicComponent
    ],
    imports: [
        CommonModule,
        AccordionModule,
        CheckboxModule
    ],
    exports: [
        AccordionBasicComponent
    ]
})
export class AccordionExamplesModule {
}
