import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule, PageHeaderModule, SidePanelModule } from '@ux-aspects/ux-aspects';
import { ToggleSideNavComponent } from './toggle-side-nav.component';
import { AppRoutingModule } from '../../../../../app-routing.module';

@NgModule({
    declarations: [
        ToggleSideNavComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        PageHeaderModule,
        NavigationModule,
        SidePanelModule,
    ],
    exports: [
        ToggleSideNavComponent,
    ]
})
export class ToggleSideNavModule {
}
