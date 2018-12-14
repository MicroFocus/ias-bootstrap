import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {  } from '@ux-aspects/ux-aspects';
import { PageHeaderModule } from '@ux-aspects/ux-aspects';

import { AppBarBasicComponent } from './app-bar-basic';
import { AppBarSecondaryComponent } from './app-bar-secondary';

@NgModule({
    declarations: [
        AppBarBasicComponent,
        AppBarSecondaryComponent
    ],
    imports: [
        CommonModule,
        PageHeaderModule
    ],
    exports: [
        AppBarBasicComponent,
        AppBarSecondaryComponent
    ]
})
export class AppBarExamplesModule {
}
