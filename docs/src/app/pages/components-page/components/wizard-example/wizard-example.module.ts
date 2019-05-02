import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { WizardExampleComponent } from './wizard-example.component';
import { SimpleWizardModule } from './simple-wizard/simple-wizard.module';
import { IASMarqueeWizardModule } from './marquee-wizard/marquee-wizard.module';

@NgModule({
    declarations: [
        WizardExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        SimpleWizardModule,
        IASMarqueeWizardModule,
    ],
    exports: [
        WizardExampleComponent
    ]
})
export class WizardExampleModule {
    constructor() {
    }
}
