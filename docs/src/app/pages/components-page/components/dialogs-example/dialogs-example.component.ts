import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-dialogs-example',
    templateUrl: './dialogs-example.component.html',
    styleUrls: ['./dialogs-example.component.scss']
})
export class DialogsExampleComponent implements OnInit {
    exampleFiles = {
        'dialog-basic.component.html': require('!raw-loader!./dialog-basic/dialog-basic.component.html'),
        'dialog-basic.component.ts': require('!raw-loader!./dialog-basic/dialog-basic.component.ts'),
        'dialog-basic.module.ts': require('!raw-loader!./dialog-basic/dialog-basic.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }
}
