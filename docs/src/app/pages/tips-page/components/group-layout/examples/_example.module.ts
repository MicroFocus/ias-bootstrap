import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwimLaneLayoutComponent } from './swim-lane-layout';

@NgModule({
    declarations: [
        SwimLaneLayoutComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SwimLaneLayoutComponent,
    ]
})
export class GroupLayoutExamplesModule {
}
