import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-progress-example',
    templateUrl: './progress-example.component.html',
    styleUrls: ['./progress-example.component.scss']
})
export class ProgressExampleComponent implements OnInit {
    exampleFiles = {
        'progress-bar.component.html': require('!raw-loader!./progress-bar/progress-bar.component.html'),
        'progress-bar.component.scss': require('!raw-loader!./progress-bar/progress-bar.component.scss'),
        'progress-bar.component.ts': require('!raw-loader!./progress-bar/progress-bar.component.ts'),
        'progress-bar.module.ts': require('!raw-loader!./progress-bar/progress-bar.module.ts'),

        'progress-spinner.component.html': require('!raw-loader!./progress-spinner/progress-spinner.component.html'),
        'progress-spinner.component.scss': require('!raw-loader!./progress-spinner/progress-spinner.component.scss'),
        'progress-spinner.component.ts': require('!raw-loader!./progress-spinner/progress-spinner.component.ts'),
        'progress-spinner.module.ts': require('!raw-loader!./progress-spinner/progress-spinner.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
