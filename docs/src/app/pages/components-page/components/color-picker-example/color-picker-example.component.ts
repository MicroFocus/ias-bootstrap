import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-color-picker-example',
    templateUrl: './color-picker-example.component.html',
    styleUrls: ['./color-picker-example.component.scss']
})
export class ColorPickerExampleComponent implements OnInit {

    exampleFiles = {
        'color-picker-basic.component.html': require('!raw-loader!./color-picker-basic/color-picker-basic.component.html'),
        'color-picker-basic.component.scss': require('!raw-loader!./color-picker-basic/color-picker-basic.component.scss'),
        'color-picker-basic.component.ts': require('!raw-loader!./color-picker-basic/color-picker-basic.component.ts'),
        'color-picker-basic.module.ts': require('!raw-loader!./color-picker-basic/color-picker-basic.module.ts'),
    };

    constructor() { }

    ngOnInit() {
    }

}
