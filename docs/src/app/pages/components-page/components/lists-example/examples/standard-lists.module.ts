import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardListsComponent } from './standard-lists.component';

@NgModule({
    declarations: [
        StandardListsComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardListsComponent
    ]
})
export class StandardListsModule {
}
