import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { PanelsExampleComponent } from './panels-example.component';
import { PanelExamplesModule } from './examples/panel-examples.module';

@NgModule({
    declarations: [
        PanelsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        PanelExamplesModule,
    ],
    exports: [
        PanelsExampleComponent
    ]
})
export class PanelsExampleModule {
    constructor() {
    }
}
