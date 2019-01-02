import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryTabsComponent } from './primary-tabs';
import { TabsetModule } from '@ux-aspects/ux-aspects';
import { SecondaryTabsComponent } from './secondary-tabs';

@NgModule({
    declarations: [
        PrimaryTabsComponent,
        SecondaryTabsComponent,
    ],
    imports: [
        CommonModule,
        TabsetModule,
    ],
    exports: [
        PrimaryTabsComponent,
        SecondaryTabsComponent,
    ]
})
export class TabsExamplesModule {
}
