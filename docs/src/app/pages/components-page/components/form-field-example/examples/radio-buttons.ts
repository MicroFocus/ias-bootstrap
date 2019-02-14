import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-radio-buttons',
    templateUrl: './radio-buttons.html',
    styleUrls: ['./radio-buttons.scss']
})
export class RadioButtonsComponent implements OnInit {
    radioOptions = {
        option1: 'One',
        option2: 'Two',
        option3: 'Three',
        option4: 'Four'
    };

    radioButtonsDisabled = false;
    radioButtonValue: string;

    constructor() {
    }

    ngOnInit() {
    }
}
