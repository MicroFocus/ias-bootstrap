import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar';
import { ProgressBarModule } from '@ux-aspects/ux-aspects';
import { ProgressSpinnerComponent } from './progress-spinner';
import { ActivityModule } from '@micro-focus/ux-aspects';

@NgModule({
    declarations: [
        ProgressBarComponent,
        ProgressSpinnerComponent,
    ],
    imports: [
        CommonModule,
        ProgressBarModule,
        ActivityModule,
    ],
    exports: [
        ProgressBarComponent,
        ProgressSpinnerComponent,
    ]
})
export class ProgressExamplesModule {
}
