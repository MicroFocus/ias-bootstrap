import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-app-bar-example',
    templateUrl: './app-bar-example.component.html',
    styleUrls: ['./app-bar-example.component.scss']
})
export class AppBarExampleComponent implements OnInit {
    exampleFiles = {
        'app-bar-basic.component.html': require('!raw-loader!./app-bar-basic/app-bar-basic.component.html'),
        'app-bar-basic.component.ts': require('!raw-loader!./app-bar-basic/app-bar-basic.component.ts'),
        'app-bar-basic.module.ts': require('!raw-loader!./app-bar-basic/app-bar-basic.module.ts'),

        'app-bar-secondary.component.html': require('!raw-loader!./app-bar-secondary/app-bar-secondary.component.html'),
        'app-bar-secondary.component.ts': require('!raw-loader!./app-bar-secondary/app-bar-secondary.component.ts'),
        'app-bar-secondary.module.ts': require('!raw-loader!./app-bar-secondary/app-bar-secondary.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
