import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { SidePanelsExampleComponent } from './side-panels-example.component';
import { StandardSidePanelModule } from './standard-side-panel/standard-side-panel.module';

@NgModule({
    declarations: [
        SidePanelsExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        StandardSidePanelModule,
    ],
    exports: [
        SidePanelsExampleComponent,
    ]
})
export class SidePanelsExampleModule {
    constructor() {
    }
}
