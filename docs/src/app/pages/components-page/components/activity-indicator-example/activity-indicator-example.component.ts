import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-activity-indicator-example',
    templateUrl: './activity-indicator-example.component.html',
    styleUrls: ['./activity-indicator-example.component.scss']
})
export class ActivityIndicatorExampleComponent implements OnInit {
    exampleFiles = {
        'activity-indicator-basic.component.html': require('!raw-loader!./activity-indicator-basic/activity-indicator-basic.component.html'),
        'activity-indicator-basic.component.scss': require('!raw-loader!./activity-indicator-basic/activity-indicator-basic.component.scss'),
        'activity-indicator-basic.component.ts': require('!raw-loader!./activity-indicator-basic/activity-indicator-basic.component.ts'),
        'activity-indicator-basic.module.ts': require('!raw-loader!./activity-indicator-basic/activity-indicator-basic.module.ts'),

        'activity-indicator-large.component.html': require('!raw-loader!./activity-indicator-large/activity-indicator-large.component.html'),
        'activity-indicator-large.component.scss': require('!raw-loader!./activity-indicator-large/activity-indicator-large.component.scss'),
        'activity-indicator-large.component.ts': require('!raw-loader!./activity-indicator-large/activity-indicator-large.component.ts'),
        'activity-indicator-large.module.ts': require('!raw-loader!./activity-indicator-large/activity-indicator-large.module.ts'),

        'activity-indicator-spinner.component.html': require('!raw-loader!./activity-indicator-spinner/activity-indicator-spinner.component.html'),
        'activity-indicator-spinner.component.ts': require('!raw-loader!./activity-indicator-spinner/activity-indicator-spinner.component.ts'),
        'activity-indicator-spinner.module.ts': require('!raw-loader!./activity-indicator-spinner/activity-indicator-spinner.module.ts'),
    };
    constructor() { }

    ngOnInit() {
    }

}
