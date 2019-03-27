import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardHeadersComponent } from './standard-headers.component';

@NgModule({
    declarations: [
        StandardHeadersComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardHeadersComponent
    ]
})
export class StandardHeadersModule {
}
