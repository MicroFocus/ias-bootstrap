import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tabs-example',
    templateUrl: './tabs-example.component.html',
    styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-tabs.component.html': require('!raw-loader!./standard-tabs/standard-tabs.component.html'),
        'standard-tabs.component.scss': require('!raw-loader!./standard-tabs/standard-tabs.component.scss'),
        'standard-tabs.component.ts': require('!raw-loader!./standard-tabs/standard-tabs.component.ts'),
        'standard-tabs.module.ts': require('!raw-loader!./standard-tabs/standard-tabs.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
