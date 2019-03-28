import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-status-messages-example',
    templateUrl: './status-messages-example.component.html',
    styleUrls: ['./status-messages-example.component.scss']
})
export class StatusMessagesExampleComponent implements OnInit {
    exampleFiles = {
        'standard-messages.component.html': require('!raw-loader!./standard-messages/standard-messages.component.html'),
        'standard-messages.component.scss': require('!raw-loader!./standard-messages/standard-messages.component.scss'),
        'standard-messages.component.ts': require('!raw-loader!./standard-messages/standard-messages.component.ts'),
        'standard-messages.module.ts': require('!raw-loader!./standard-messages/standard-messages.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
