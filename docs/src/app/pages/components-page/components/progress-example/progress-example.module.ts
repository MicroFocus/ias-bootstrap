import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { ProgressExampleComponent } from './progress-example.component';
import { ProgressBarExampleModule } from './examples/progress-bar.module';
import { ProgressSpinnerModule } from './examples/progress-spinner.module';

@NgModule({
    declarations: [
        ProgressExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        ProgressBarExampleModule,
        ProgressSpinnerModule,
    ],
    exports: [
        ProgressExampleComponent
    ]
})
export class ProgressExampleModule {
    constructor() {
    }
}
