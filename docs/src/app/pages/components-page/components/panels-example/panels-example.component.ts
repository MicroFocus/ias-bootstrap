import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-panels-example',
    templateUrl: './panels-example.component.html',
    styleUrls: ['./panels-example.component.scss']
})
export class PanelsExampleComponent implements OnInit {
    exampleFiles = {
        'standard-panels.html': require('!raw-loader!./examples/standard-panels.html'),
        'standard-panels.ts': require('!raw-loader!./examples/standard-panels.ts'),
        'standard-panels.scss': require('!raw-loader!./examples/standard-panels.scss'),
        'panel-with-header.html': require('!raw-loader!./examples/panel-with-header.html'),
        'panel-with-header.ts': require('!raw-loader!./examples/panel-with-header.ts'),
        'panel-with-header.scss': require('!raw-loader!./examples/panel-with-header.scss'),
        'panel-with-footer.html': require('!raw-loader!./examples/panel-with-footer.html'),
        'panel-with-footer.ts': require('!raw-loader!./examples/panel-with-footer.ts'),
        'panel-with-footer.scss': require('!raw-loader!./examples/panel-with-footer.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
