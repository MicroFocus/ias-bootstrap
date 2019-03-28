import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardSideNavComponent } from './standard-side-nav.component';
import { NavigationModule, PageHeaderModule, SidePanelModule } from '@ux-aspects/ux-aspects';
import { AppRoutingModule } from '../../../../../app-routing.module';

@NgModule({
    declarations: [
        StandardSideNavComponent,
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
    ]
})
export class StandardSideNavModule {
}
