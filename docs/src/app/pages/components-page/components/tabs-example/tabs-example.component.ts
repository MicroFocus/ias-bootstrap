import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tabs-example',
    templateUrl: './tabs-example.component.html',
    styleUrls: ['./tabs-example.component.scss']
})
export class TabsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-tabs.html': require('!raw-loader!./examples/standard-tabs.html'),
        'standard-tabs.ts': require('!raw-loader!./examples/standard-tabs.ts'),
        'standard-tabs.scss': require('!raw-loader!./examples/standard-tabs.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
