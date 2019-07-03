import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLandingPageComponent } from './standard-landing-page';
import { MinLandingPageComponent } from './min-landing-page';

@NgModule({
    declarations: [
        MinLandingPageComponent,
        StandardLandingPageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MinLandingPageComponent,
        StandardLandingPageComponent
    ]
})
export class LandingPageExamplesModule {
}
