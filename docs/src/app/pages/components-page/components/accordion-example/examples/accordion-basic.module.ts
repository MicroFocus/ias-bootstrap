import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasicComponent } from './accordion-basic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from '@ux-aspects/ux-aspects';


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
export class AccordionBasicModule {
    constructor() {
    }
}
