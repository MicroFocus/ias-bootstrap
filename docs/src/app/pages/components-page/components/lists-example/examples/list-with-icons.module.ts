import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWithIconsComponent } from './list-with-icons.component';

@NgModule({
    declarations: [
        ListWithIconsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ListWithIconsComponent
    ]
})
export class ListWithIconsModule {
}
