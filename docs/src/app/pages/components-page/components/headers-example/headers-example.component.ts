import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-headers-example',
    templateUrl: './headers-example.component.html',
    styleUrls: ['./headers-example.component.scss']
})
export class HeadersExampleComponent implements OnInit {
    exampleFiles = {
        'standard-headers.component.html': require('!raw-loader!./standard-headers/standard-headers.component.html'),
        'standard-headers.component.scss': require('!raw-loader!./standard-headers/standard-headers.component.scss'),
        'standard-headers.component.ts': require('!raw-loader!./standard-headers/standard-headers.component.ts'),
        'standard-headers.module.ts': require('!raw-loader!./standard-headers/standard-headers.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
