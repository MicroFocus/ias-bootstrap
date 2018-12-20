import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-validation-example',
    templateUrl: './form-validation-example.component.html',
    styleUrls: ['./form-validation-example.component.scss']
})
export class FormValidationExampleComponent implements OnInit {

    exampleFiles = {
        'field-by-field.html': require('!raw-loader!./examples/field-by-field.html'),
        'field-by-field.ts': require('!raw-loader!./examples/field-by-field.ts'),
        'field-by-field.scss': require('!raw-loader!./examples/field-by-field.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
