import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
    selector: 'app-buttons-example',
    templateUrl: './buttons-example.component.html',
    styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent implements OnInit {

    textButtons = {
        html: {filename: 'text-buttons.html', text: require('!raw-loader!./examples/text-buttons.html')},
        ts: {filename: 'text-buttons.ts', text: require('!raw-loader!./examples/text-buttons.ts')}
    };
    specialTextButtons = {
        html: {filename: 'text-buttons.html', text: require('!raw-loader!./examples/special-text-buttons.html')},
        ts: {filename: 'text-buttons.ts', text: require('!raw-loader!./examples/special-text-buttons.ts')}
    };
    // iconButtons = {
    //     html: {filename: 'text-buttons.html', text: require('!raw-loader!./examples/icon-buttons.html')},
    //     ts: {filename: 'text-buttons.ts', text: require('!raw-loader!./examples/icon-buttons.ts')}
    // };
    // specialIconButtons = {
    //     html: {filename: 'text-buttons.html', text: require('!raw-loader!./examples/special-icon-buttons.html')},
    //     ts: {filename: 'text-buttons.ts', text: require('!raw-loader!./examples/special-icon-buttons.ts')}
    // };

    constructor() {
    }

    ngOnInit() {
    }

}
