import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
    exampleFiles = {
        'standard-login-page.html': require('!raw-loader!./examples/standard-login-page.html'),
        'standard-login-page.ts': require('!raw-loader!./examples/standard-login-page.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }
}
