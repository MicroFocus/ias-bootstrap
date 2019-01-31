import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-menu-example',
    templateUrl: './menu-example.component.html',
    styleUrls: ['./menu-example.component.scss']
})
export class MenuExampleComponent implements OnInit {
    exampleFiles = {
        'standard-menus.html': require('!raw-loader!./examples/standard-menus.html'),
        'standard-menus.ts': require('!raw-loader!./examples/standard-menus.ts'),
        'standard-menus.scss': require('!raw-loader!./examples/standard-menus.scss'),
        'split-button-menus.html': require('!raw-loader!./examples/split-button-menus.html'),
        'split-button-menus.ts': require('!raw-loader!./examples/split-button-menus.ts'),
        'split-button-menus.scss': require('!raw-loader!./examples/split-button-menus.scss'),
        'complex-menus.html': require('!raw-loader!./examples/complex-menus.html'),
        'complex-menus.ts': require('!raw-loader!./examples/complex-menus.ts'),
        'complex-menus.scss': require('!raw-loader!./examples/complex-menus.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
