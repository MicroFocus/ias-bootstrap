import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLinksComponent } from './standard-links.component';

@NgModule({
    declarations: [
        StandardLinksComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardLinksComponent
    ]
})
export class StandardLinksModule {
}
