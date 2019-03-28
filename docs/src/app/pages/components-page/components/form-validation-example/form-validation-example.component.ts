import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-validation-example',
    templateUrl: './form-validation-example.component.html',
    styleUrls: ['./form-validation-example.component.scss']
})
export class FormValidationExampleComponent implements OnInit {

    exampleFiles = {
        'field-by-field.component.html': require('!raw-loader!./field-by-field/field-by-field.component.html'),
        'field-by-field.component.scss': require('!raw-loader!./field-by-field/field-by-field.component.scss'),
        'field-by-field.component.ts': require('!raw-loader!./field-by-field/field-by-field.component.ts'),
        'field-by-field.module.ts': require('!raw-loader!./field-by-field/field-by-field.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
