import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetModule } from '@ux-aspects/ux-aspects';
import { StandardTabsComponent } from './standard-tabs.component';

@NgModule({
    declarations: [
        StandardTabsComponent,
    ],
    imports: [
        CommonModule,
        TabsetModule,
    ],
    exports: [
        StandardTabsComponent,
    ]
})
export class StandardTabsModule {
}
