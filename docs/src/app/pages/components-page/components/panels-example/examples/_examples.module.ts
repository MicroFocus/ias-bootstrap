import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPanelsComponent } from './standard-panels';
import { PanelWithHeaderComponent } from './panel-with-header';
import { PanelWithHeaderOnlyComponent } from './panel-with-header-only';
import { PanelWithFooterComponent } from './panel-with-footer';

@NgModule({
    declarations: [
        StandardPanelsComponent,
        PanelWithHeaderComponent,
        PanelWithHeaderOnlyComponent,
        PanelWithFooterComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardPanelsComponent,
        PanelWithHeaderComponent,
        PanelWithHeaderOnlyComponent,
        PanelWithFooterComponent,
    ]
})
export class PanelExamplesModule {
}
