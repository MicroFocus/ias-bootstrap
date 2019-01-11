import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLoginPageComponent } from './standard-login-page';

@NgModule({
    declarations: [
        StandardLoginPageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StandardLoginPageComponent
    ]
})
export class LoginPageExamplesModule {
}
