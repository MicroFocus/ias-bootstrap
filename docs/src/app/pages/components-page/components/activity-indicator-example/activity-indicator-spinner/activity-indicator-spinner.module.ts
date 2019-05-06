import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityIndicatorSpinnerComponent } from './activity-indicator-spinner.component';


@NgModule({
    declarations: [
        ActivityIndicatorSpinnerComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ActivityIndicatorSpinnerComponent
    ]
})
export class ActivityIndicatorSpinnerModule {
    constructor() {
    }
}
