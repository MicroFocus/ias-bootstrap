import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldByFieldComponent } from './field-by-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FieldByFieldComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        FieldByFieldComponent
    ]
})
export class FieldByFieldModule {
}
