import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';

@NgModule({
    declarations: [
        ProgressSpinnerComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ProgressSpinnerComponent,
    ]
})
export class ProgressSpinnerModule {
}
