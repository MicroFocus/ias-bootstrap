import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-panels-example',
    templateUrl: './panels-example.component.html',
    styleUrls: ['./panels-example.component.scss']
})
export class PanelsExampleComponent implements OnInit {
    exampleFiles = {
        'panel-examples.html': require('!raw-loader!./examples/panel-examples.html'),
        'panel-examples.ts': require('!raw-loader!./examples/panel-examples.ts'),
        'panel-examples.scss': require('!raw-loader!./examples/panel-examples.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
