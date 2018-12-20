import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-links-example',
    templateUrl: './links-example.component.html',
    styleUrls: ['./links-example.component.scss']
})
export class LinksExampleComponent implements OnInit {
    exampleFiles = {
        'standard-links.html': require('!raw-loader!./examples/standard-links.html'),
        'standard-links.ts': require('!raw-loader!./examples/standard-links.ts'),
        'standard-links.scss': require('!raw-loader!./examples/standard-links.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
