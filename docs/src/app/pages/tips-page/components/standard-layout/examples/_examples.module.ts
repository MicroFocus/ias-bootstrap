import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout';
import { RouterModule } from '@angular/router';
import { NavigationModule, PageHeaderModule } from '@ux-aspects/ux-aspects';

@NgModule({
    declarations: [
        SimpleLayoutComponent
    ],
    imports: [
        CommonModule,
        NavigationModule,
        PageHeaderModule,
        RouterModule,
    ],
    exports: [
        SimpleLayoutComponent
    ]
})
export class StandardLayoutsModule {
}
