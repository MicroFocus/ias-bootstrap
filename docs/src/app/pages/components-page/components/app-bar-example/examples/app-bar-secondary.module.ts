import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarSecondaryComponent } from './app-bar-secondary.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppBarSecondaryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        AppBarSecondaryComponent
    ]
})
export class AppBarSecondaryModule {
    constructor() {
    }
}
