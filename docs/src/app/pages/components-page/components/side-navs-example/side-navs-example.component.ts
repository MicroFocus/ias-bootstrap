import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-side-navs-example',
    templateUrl: './side-navs-example.component.html',
    styleUrls: ['./side-navs-example.component.scss']
})
export class SideNavsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-side-nav.component.html': require('!raw-loader!./standard-side-nav/standard-side-nav.component.html'),
        'standard-side-nav.component.scss': require('!raw-loader!./standard-side-nav/standard-side-nav.component.scss'),
        'standard-side-nav.component.ts': require('!raw-loader!./standard-side-nav/standard-side-nav.component.ts'),
        'standard-side-nav.module.ts': require('!raw-loader!./standard-side-nav/standard-side-nav.module.ts'),

        'toggle-side-nav.component.html': require('!raw-loader!./toggle-side-nav/toggle-side-nav.component.html'),
        'toggle-side-nav.component.scss': require('!raw-loader!./toggle-side-nav/toggle-side-nav.component.scss'),
        'toggle-side-nav.component.ts': require('!raw-loader!./toggle-side-nav/toggle-side-nav.component.ts'),
        'toggle-side-nav.module.ts': require('!raw-loader!./toggle-side-nav/toggle-side-nav.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
