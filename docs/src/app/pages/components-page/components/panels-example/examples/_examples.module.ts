import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelExamplesComponent } from './panel-examples';

@NgModule({
    declarations: [
        PanelExamplesComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PanelExamplesComponent,
    ]
})
export class PanelExamplesModule {
}
