import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-standard-layout',
    templateUrl: './standard-layout.component.html',
    styleUrls: ['./standard-layout.component.scss']
})
export class StandardLayoutComponent implements OnInit {
    exampleFiles = {
        'simple-layout.html': require('!raw-loader!./examples/simple-layout.html'),
        'simple-layout.ts': require('!raw-loader!./examples/simple-layout.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
