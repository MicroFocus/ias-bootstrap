import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-progress-example',
    templateUrl: './progress-example.component.html',
    styleUrls: ['./progress-example.component.scss']
})
export class ProgressExampleComponent implements OnInit {
    exampleFiles = {
        'progress-bar.html': require('!raw-loader!./examples/progress-bar.html'),
        'progress-bar.ts': require('!raw-loader!./examples/progress-bar.ts'),
        'progress-bar.scss': require('!raw-loader!./examples/progress-bar.scss'),
        'progress-spinner.html': require('!raw-loader!./examples/progress-spinner.html'),
        'progress-spinner.ts': require('!raw-loader!./examples/progress-spinner.ts'),
        'progress-spinner.scss': require('!raw-loader!./examples/progress-spinner.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
