import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-side-panels-example',
    templateUrl: './side-panels-example.component.html',
    styleUrls: ['./side-panels-example.component.scss']
})
export class SidePanelsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-side-panel.component.html': require('!raw-loader!./standard-side-panel/standard-side-panel.component.html'),
        'standard-side-panel.component.scss': require('!raw-loader!./standard-side-panel/standard-side-panel.component.scss'),
        'standard-side-panel.component.ts': require('!raw-loader!./standard-side-panel/standard-side-panel.component.ts'),
        'standard-side-panel.module.ts': require('!raw-loader!./standard-side-panel/standard-side-panel.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
