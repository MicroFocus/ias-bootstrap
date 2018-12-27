import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPanelsComponent } from './standard-panels';
import { PanelWithHeaderComponent } from './panel-with-header';
import { PanelWithFooterComponent } from './panel-with-footer';

@NgModule({
    declarations: [
        StandardPanelsComponent,
        PanelWithHeaderComponent,
        PanelWithFooterComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardPanelsComponent,
        PanelWithHeaderComponent,
        PanelWithFooterComponent,
    ]
})
export class PanelExamplesModule {
}
