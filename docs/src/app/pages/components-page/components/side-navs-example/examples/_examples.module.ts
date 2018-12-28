import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardSideNavComponent } from './standard-side-nav';
import { NavigationModule, PageHeaderModule, SidePanelModule } from '@ux-aspects/ux-aspects';
import { ToggleSideNavComponent } from './toggle-side-nav';
import { AppRoutingModule } from '../../../../../app-routing.module';

@NgModule({
    declarations: [
        StandardSideNavComponent,
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
        StandardSideNavComponent,
        ToggleSideNavComponent,
    ]
})
export class SideNavExamplesModule {
}
