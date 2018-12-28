import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-side-navs-example',
    templateUrl: './side-navs-example.component.html',
    styleUrls: ['./side-navs-example.component.scss']
})
export class SideNavsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-side-nav.html': require('!raw-loader!./examples/standard-side-nav.html'),
        'standard-side-nav.ts': require('!raw-loader!./examples/standard-side-nav.ts'),
        'standard-side-nav.scss': require('!raw-loader!./examples/standard-side-nav.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
