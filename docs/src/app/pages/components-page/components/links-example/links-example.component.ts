import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-links-example',
    templateUrl: './links-example.component.html',
    styleUrls: ['./links-example.component.scss']
})
export class LinksExampleComponent implements OnInit {
    exampleFiles = {
        'standard-links.component.html': require('!raw-loader!./standard-links/standard-links.component.html'),
        'standard-links.component.scss': require('!raw-loader!./standard-links/standard-links.component.scss'),
        'standard-links.component.ts': require('!raw-loader!./standard-links/standard-links.component.ts'),
        'standard-links.module.ts': require('!raw-loader!./standard-links/standard-links.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
