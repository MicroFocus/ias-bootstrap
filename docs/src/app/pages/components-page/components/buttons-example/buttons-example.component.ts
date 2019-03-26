import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent {
    exampleFiles = {
        'text-buttons.component.html': require('!raw-loader!./examples/text-buttons.component.html'),
        'text-buttons.component.ts': require('!raw-loader!./examples/text-buttons.component.ts'),
        'text-buttons.module.ts': require('!raw-loader!./examples/text-buttons.module.ts'),

        'icon-buttons.component.html': require('!raw-loader!./examples/icon-buttons.component.html'),
        'icon-buttons.component.ts': require('!raw-loader!./examples/icon-buttons.component.ts'),
        'icon-buttons.module.ts': require('!raw-loader!./examples/icon-buttons.module.ts'),

        'icon-text-buttons.component.html': require('!raw-loader!./examples/icon-text-buttons.component.html'),
        'icon-text-buttons.component.ts': require('!raw-loader!./examples/icon-text-buttons.component.ts'),
        'icon-text-buttons.module.ts': require('!raw-loader!./examples/icon-text-buttons.module.ts'),
    };
}
