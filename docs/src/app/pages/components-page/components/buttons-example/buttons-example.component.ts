import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent {
    exampleFiles = {
        'text-buttons.html': require('!raw-loader!./examples/text-buttons.html'),
        'text-buttons.ts': require('!raw-loader!./examples/text-buttons.ts'),
        'icon-buttons.html': require('!raw-loader!./examples/icon-buttons.html'),
        'icon-buttons.ts': require('!raw-loader!./examples/icon-buttons.ts'),
        'icon-text-buttons.html': require('!raw-loader!./examples/icon-text-buttons.html'),
        'icon-text-buttons.ts': require('!raw-loader!./examples/icon-text-buttons.ts'),
    };
}
