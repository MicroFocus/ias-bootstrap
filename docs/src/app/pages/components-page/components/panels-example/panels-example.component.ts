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

        'panel-dnd.component.html': require('!raw-loader!./panel-dnd/panel-dnd.component.html'),
        'panel-dnd.component.scss': require('!raw-loader!./panel-dnd/panel-dnd.component.scss'),
        'panel-dnd.component.ts': require('!raw-loader!./panel-dnd/panel-dnd.component.ts'),
        'panel-dnd.module.ts': require('!raw-loader!./panel-dnd/panel-dnd.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
