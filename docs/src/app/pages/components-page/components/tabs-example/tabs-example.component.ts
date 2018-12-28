import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tabs-example',
    templateUrl: './tabs-example.component.html',
    styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit {
    exampleFiles = {
        'primary-tabs.html': require('!raw-loader!./examples/primary-tabs.html'),
        'primary-tabs.ts': require('!raw-loader!./examples/primary-tabs.ts'),
        'primary-tabs.scss': require('!raw-loader!./examples/primary-tabs.scss'),
        'secondary-tabs.html': require('!raw-loader!./examples/secondary-tabs.html'),
        'secondary-tabs.ts': require('!raw-loader!./examples/secondary-tabs.ts'),
        'secondary-tabs.scss': require('!raw-loader!./examples/secondary-tabs.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
