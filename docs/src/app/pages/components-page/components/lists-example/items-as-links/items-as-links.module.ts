import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsAsLinksComponent } from './items-as-links.component';

@NgModule({
    declarations: [
        ItemsAsLinksComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ItemsAsLinksComponent
    ]
})
export class ItemsAsLinksModule {
}
