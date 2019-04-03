import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDndComponent } from './panel-dnd.component';
import { ReorderableModule } from '@ux-aspects/ux-aspects';

@NgModule({
    declarations: [
        PanelDndComponent,
    ],
    imports: [
        CommonModule,
        ReorderableModule,
    ],
    exports: [
        PanelDndComponent,
    ]
})
export class PanelDndModule {
}
