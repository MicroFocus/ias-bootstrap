import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-dialogs-example',
    templateUrl: './dialogs-example.component.html',
    styleUrls: ['./dialogs-example.component.scss']
})
export class DialogsExampleComponent implements OnInit {
    exampleFiles = {
        'dialog-basic.html': require('!raw-loader!./examples/dialog-basic.html'),
        'dialog-basic.ts': require('!raw-loader!./examples/dialog-basic.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }
}
