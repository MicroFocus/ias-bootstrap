import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-app-bar-example',
    templateUrl: './app-bar-example.component.html',
    styleUrls: ['./app-bar-example.component.scss']
})
export class AppBarExampleComponent implements OnInit {
    exampleFiles = {
        'app-bar-basic.html': require('!raw-loader!./examples/app-bar-basic.html'),
        'app-bar-basic.ts': require('!raw-loader!./examples/app-bar-basic.ts'),
        'app-bar-secondary.html': require('!raw-loader!./examples/app-bar-secondary.html'),
        'app-bar-secondary.ts': require('!raw-loader!./examples/app-bar-secondary.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
