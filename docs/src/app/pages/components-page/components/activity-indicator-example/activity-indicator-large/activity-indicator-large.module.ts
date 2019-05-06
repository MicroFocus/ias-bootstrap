import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityIndicatorLargeComponent } from './activity-indicator-large.component';


@NgModule({
    declarations: [
        ActivityIndicatorLargeComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ActivityIndicatorLargeComponent
    ]
})
export class ActivityIndicatorLargeModule {
    constructor() {
    }
}
