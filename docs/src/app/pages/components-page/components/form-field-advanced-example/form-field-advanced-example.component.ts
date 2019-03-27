import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-field-advanced-example',
    templateUrl: './form-field-advanced-example.component.html',
    styleUrls: ['./form-field-advanced-example.component.scss']
})
export class FormFieldAdvancedExampleComponent implements OnInit {
    exampleFiles = {
        'select-fields.component.html': require('!raw-loader!./examples/select-fields.component.html'),
        'select-fields.component.scss': require('!raw-loader!./examples/select-fields.component.scss'),
        'select-fields.component.ts': require('!raw-loader!./examples/select-fields.component.ts'),
        'select-fields.module.ts': require('!raw-loader!./examples/select-fields.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
