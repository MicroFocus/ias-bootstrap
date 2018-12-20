import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-headers-example',
    templateUrl: './headers-example.component.html',
    styleUrls: ['./headers-example.component.scss']
})
export class HeadersExampleComponent implements OnInit {
    exampleFiles = {
        'standard-headers.html': require('!raw-loader!./examples/standard-headers.html'),
        'standard-headers.ts': require('!raw-loader!./examples/standard-headers.ts'),
        'standard-headers.scss': require('!raw-loader!./examples/standard-headers.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
