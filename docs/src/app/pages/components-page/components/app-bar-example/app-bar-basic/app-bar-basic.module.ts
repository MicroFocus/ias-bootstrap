import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarBasicComponent } from './app-bar-basic.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppBarBasicComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        AppBarBasicComponent
    ]
})
export class AppBarBasicModule {
    constructor() {
    }
}
