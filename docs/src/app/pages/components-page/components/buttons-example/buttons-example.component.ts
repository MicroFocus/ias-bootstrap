import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent implements OnInit {
    textButtons = {
        html: {filename: 'text-buttons.html', text: require('!raw-loader!./examples/text-buttons.html')},
        ts: {filename: 'text-buttons.ts', text: require('!raw-loader!./examples/text-buttons.ts')},
        visible: false
    };
    specialTextButtons = {
        html: {filename: 'special-text-buttons.html', text: require('!raw-loader!./examples/special-text-buttons.html')},
        ts: {filename: 'special-text-buttons.ts', text: require('!raw-loader!./examples/special-text-buttons.ts')},
        visible: false
    };
    iconButtons = {
        html: {filename: 'icon-buttons.html', text: require('!raw-loader!./examples/icon-buttons.html')},
        ts: {filename: 'icon-buttons.ts', text: require('!raw-loader!./examples/icon-buttons.ts')},
        visible: false
    };
    // specialIconButtons = {
    //     html: {filename: 'special-icon-buttons.html', text: require('!raw-loader!./examples/special-icon-buttons.html')},
    //     ts: {filename: 'special-icon-buttons.ts', text: require('!raw-loader!./examples/special-icon-buttons.ts')}
    // };

    constructor() {
    }

    ngOnInit() {
    }

}
