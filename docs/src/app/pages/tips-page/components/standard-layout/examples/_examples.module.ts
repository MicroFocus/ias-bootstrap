import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout';

@NgModule({
    declarations: [
        SimpleLayoutComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SimpleLayoutComponent
    ]
})
export class StandardLayoutsModule {
}
