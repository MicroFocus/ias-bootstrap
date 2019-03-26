import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-field-advanced-example',
    templateUrl: './form-field-advanced-example.component.html',
    styleUrls: ['./form-field-advanced-example.component.scss']
})
export class FormFieldAdvancedExampleComponent implements OnInit {
    exampleFiles = {
        'select-fields.html': require('!raw-loader!./examples/select-fields.html'),
        'select-fields.ts': require('!raw-loader!./examples/select-fields.ts'),
        'select-fields.scss': require('!raw-loader!./examples/select-fields.scss'),
    }

    constructor() {
    }

    ngOnInit() {
    }

}
