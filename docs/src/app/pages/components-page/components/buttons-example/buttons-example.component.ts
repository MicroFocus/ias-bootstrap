import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent {
    exampleFiles = {
        'text-buttons.html': require('!raw-loader!./examples/text-buttons.html'),
        'text-buttons.ts': require('!raw-loader!./examples/text-buttons.ts'),
        'special-text-buttons.html': require('!raw-loader!./examples/special-text-buttons.html'),
        'special-text-buttons.ts': require('!raw-loader!./examples/special-text-buttons.ts'),
        'icon-buttons.html': require('!raw-loader!./examples/icon-buttons.html'),
        'icon-buttons.ts': require('!raw-loader!./examples/icon-buttons.ts'),
        // 'special-icon-buttons.html': require('!raw-loader!./examples/special-icon-buttons.html'),
        // 'special-icon-buttons.ts': require('!raw-loader!./examples/special-icon-buttons.ts')
    };
}
