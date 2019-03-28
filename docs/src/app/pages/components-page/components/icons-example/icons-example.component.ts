import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-icons-example',
    templateUrl: './icons-example.component.html',
    styleUrls: ['./icons-example.component.scss']
})
export class IconsExampleComponent implements OnInit {
    exampleFiles = {
        'icon-sizes.component.html': require('!raw-loader!./icon-sizes/icon-sizes.component.html'),
        'icon-sizes.component.scss': require('!raw-loader!./icon-sizes/icon-sizes.component.scss'),
        'icon-sizes.component.ts': require('!raw-loader!./icon-sizes/icon-sizes.component.ts'),
        'icon-sizes.module.ts': require('!raw-loader!./icon-sizes/icon-sizes.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
