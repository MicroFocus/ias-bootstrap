import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-menu-example',
    templateUrl: './menu-example.component.html',
    styleUrls: ['./menu-example.component.scss']
})
export class MenuExampleComponent implements OnInit {
    exampleFiles = {
        'standard-menus.component.html': require('!raw-loader!./examples/standard-menus.component.html'),
        'standard-menus.component.scss': require('!raw-loader!./examples/standard-menus.component.scss'),
        'standard-menus.component.ts': require('!raw-loader!./examples/standard-menus.component.ts'),
        'standard-menus.module.ts': require('!raw-loader!./examples/standard-menus.module.ts'),

        'split-button-menus.component.html': require('!raw-loader!./examples/split-button-menus.component.html'),
        'split-button-menus.component.scss': require('!raw-loader!./examples/split-button-menus.component.scss'),
        'split-button-menus.component.ts': require('!raw-loader!./examples/split-button-menus.component.ts'),
        'split-button-menus.module.ts': require('!raw-loader!./examples/split-button-menus.module.ts'),

        'complex-menus.component.html': require('!raw-loader!./examples/complex-menus.component.html'),
        'complex-menus.component.scss': require('!raw-loader!./examples/complex-menus.component.scss'),
        'complex-menus.component.ts': require('!raw-loader!./examples/complex-menus.component.ts'),
        'complex-menus.module.ts': require('!raw-loader!./examples/complex-menus.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
