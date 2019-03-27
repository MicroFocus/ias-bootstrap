import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsAsButtonsComponent } from './items-as-buttons.component';

@NgModule({
    declarations: [
        ItemsAsButtonsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ItemsAsButtonsComponent
    ]
})
export class ItemsAsButtonsModule {
}
