import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from '@ux-aspects/ux-aspects';
import { FormsModule } from '@angular/forms';
import { StandardHeadersComponent } from './standard-headers';

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
export class HeadersExamplesModule {
}
