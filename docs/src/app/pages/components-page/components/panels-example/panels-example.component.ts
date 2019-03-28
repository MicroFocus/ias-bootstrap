import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-panels-example',
    templateUrl: './panels-example.component.html',
    styleUrls: ['./panels-example.component.scss']
})
export class PanelsExampleComponent implements OnInit {
    exampleFiles = {
        'panel-examples.component.html': require('!raw-loader!./panel-examples/panel-examples.component.html'),
        'panel-examples.component.scss': require('!raw-loader!./panel-examples/panel-examples.component.scss'),
        'panel-examples.component.ts': require('!raw-loader!./panel-examples/panel-examples.component.ts'),
        'panel-examples.module.ts': require('!raw-loader!./panel-examples/panel-examples.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
