import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar';
import { ProgressBarModule } from '@ux-aspects/ux-aspects';
import { ProgressSpinnerComponent } from './progress-spinner';

@NgModule({
    declarations: [
        ProgressBarComponent,
        ProgressSpinnerComponent,
    ],
    imports: [
        CommonModule,
        ProgressBarModule,
    ],
    exports: [
        ProgressBarComponent,
        ProgressSpinnerComponent,
    ]
})
export class ProgressExamplesModule {
}
