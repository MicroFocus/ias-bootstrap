import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasicComponent } from './accordion-basic';
import { AccordionModule } from '@ux-aspects/ux-aspects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AccordionBasicComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccordionModule,
    ],
    exports: [
        AccordionBasicComponent
    ]
})
export class AccordionExamplesModule {
}
