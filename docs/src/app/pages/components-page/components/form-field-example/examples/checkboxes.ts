import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-checkboxes',
    templateUrl: './checkboxes.html',
    styleUrls: ['./checkboxes.scss']
})
export class CheckboxesComponent implements OnInit {
    checkModel = {
        option1: true,
        option2: false,
        option3: false,
        option4: false
    };

    checkboxesDisabled = false;

    constructor() {
    }

    ngOnInit() {
    }
}
