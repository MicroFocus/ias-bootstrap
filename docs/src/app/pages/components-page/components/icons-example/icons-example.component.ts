import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-icons-example',
    templateUrl: './icons-example.component.html',
    styleUrls: ['./icons-example.component.scss']
})
export class IconsExampleComponent implements OnInit {
    exampleFiles = {
        'icon-sizes.html': require('!raw-loader!./examples/icon-sizes.html'),
        'icon-sizes.ts': require('!raw-loader!./examples/icon-sizes.ts'),
        'icon-sizes.scss': require('!raw-loader!./examples/icon-sizes.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
