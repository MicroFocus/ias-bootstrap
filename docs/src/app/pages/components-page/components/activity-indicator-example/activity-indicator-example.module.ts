import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { ActivityIndicatorExampleComponent } from './activity-indicator-example.component';
import { ActivityIndicatorBasicModule } from './activity-indicator-basic/activity-indicator-basic.module';
import { ActivityIndicatorLargeModule } from './activity-indicator-large/activity-indicator-large.module';
import { ActivityIndicatorSpinnerModule } from './activity-indicator-spinner/activity-indicator-spinner.module';

@NgModule({
    declarations: [
        ActivityIndicatorExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        ActivityIndicatorBasicModule,
        ActivityIndicatorLargeModule,
        ActivityIndicatorSpinnerModule,
    ],
    exports: [
        ActivityIndicatorExampleComponent,
    ]
})
export class ActivityIndicatorExampleModule {
    constructor() {
    }
}
