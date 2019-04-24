import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardSidePanelComponent } from './standard-side-panel.component';
import { SidePanelModule } from '@ux-aspects/ux-aspects';

@NgModule({
    declarations: [
        StandardSidePanelComponent,
    ],
    imports: [
        CommonModule,
        SidePanelModule,
    ],
    exports: [
        StandardSidePanelComponent,
    ]
})
export class StandardSidePanelModule {
}
