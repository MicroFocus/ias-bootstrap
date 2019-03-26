import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { AccordionExampleComponent } from './accordion-example.component';
import { AccordionBasicModule } from './examples/accordion-basic.module';

@NgModule({
    declarations: [
        AccordionExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        AccordionBasicModule,
    ],
    exports: [
        AccordionExampleComponent,
    ]
})
export class AccordionExampleModule {
    constructor() {
    }
}
