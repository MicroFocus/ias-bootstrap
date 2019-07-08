import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPanelLayoutComponent } from './standard-panel-layout';
import { SplitPanelLayoutComponent } from './split-panel-layout';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        StandardPanelLayoutComponent,
        SplitPanelLayoutComponent
    ],
    imports: [
        CommonModule,
        ChartsModule,
    ],
    exports: [
        StandardPanelLayoutComponent,
        SplitPanelLayoutComponent
    ]
})
export class PanelLayoutExampleModule {
}
