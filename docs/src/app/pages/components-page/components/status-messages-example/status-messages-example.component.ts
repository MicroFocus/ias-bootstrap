import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-status-messages-example',
    templateUrl: './status-messages-example.component.html',
    styleUrls: ['./status-messages-example.component.scss']
})
export class StatusMessagesExampleComponent implements OnInit {
    exampleFiles = {
        'standard-messages.html': require('!raw-loader!./examples/standard-messages.html'),
        'standard-messages.ts': require('!raw-loader!./examples/standard-messages.ts'),
        'standard-messages.scss': require('!raw-loader!./examples/standard-messages.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
