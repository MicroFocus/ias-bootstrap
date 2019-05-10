import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent {
    exampleFiles = {
        'text-buttons.component.html': require('!raw-loader!./text-buttons/text-buttons.component.html'),
        'text-buttons.component.ts': require('!raw-loader!./text-buttons/text-buttons.component.ts'),
        'text-buttons.module.ts': require('!raw-loader!./text-buttons/text-buttons.module.ts'),

        'icon-buttons.component.html': require('!raw-loader!./icon-buttons/icon-buttons.component.html'),
        'icon-buttons.component.ts': require('!raw-loader!./icon-buttons/icon-buttons.component.ts'),
        'icon-buttons.module.ts': require('!raw-loader!./icon-buttons/icon-buttons.module.ts'),

        'icon-text-buttons.component.html': require('!raw-loader!./icon-text-buttons/icon-text-buttons.component.html'),
        'icon-text-buttons.component.ts': require('!raw-loader!./icon-text-buttons/icon-text-buttons.component.ts'),
        'icon-text-buttons.module.ts': require('!raw-loader!./icon-text-buttons/icon-text-buttons.module.ts'),

        'pagination-buttons.component.html': require('!raw-loader!./pagination-buttons/pagination-buttons.component.html'),
        'pagination-buttons.component.ts': require('!raw-loader!./pagination-buttons/pagination-buttons.component.ts'),
        'pagination-buttons.module.ts': require('!raw-loader!./pagination-buttons/pagination-buttons.module.ts'),

        'floating-action-buttons.component.html':
            require('!raw-loader!./floating-action-buttons/floating-action-buttons.component.html'),
        'floating-action-buttons.component.scss':
            require('!raw-loader!./floating-action-buttons/floating-action-buttons.component.scss'),
        'floating-action-buttons.component.ts':
            require('!raw-loader!./floating-action-buttons/floating-action-buttons.component.ts'),
        'floating-action-buttons.module.ts':
            require('!raw-loader!./floating-action-buttons/floating-action-buttons.module.ts'),
    };
}
