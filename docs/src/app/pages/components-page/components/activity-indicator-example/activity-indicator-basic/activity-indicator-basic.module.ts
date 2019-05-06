import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityIndicatorBasicComponent } from './activity-indicator-basic.component';


@NgModule({
    declarations: [
        ActivityIndicatorBasicComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ActivityIndicatorBasicComponent
    ]
})
export class ActivityIndicatorBasicModule {
    constructor() {
    }
}
