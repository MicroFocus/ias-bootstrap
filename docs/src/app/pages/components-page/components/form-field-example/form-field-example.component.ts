import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-field-example',
    templateUrl: './form-field-example.component.html',
    styleUrls: ['./form-field-example.component.scss']
})
export class FormFieldExampleComponent implements OnInit {
    exampleFiles = {
        'basic-form.html': require('!raw-loader!./examples/basic-form.html'),
        'basic-form.ts': require('!raw-loader!./examples/basic-form.ts'),
        'basic-form.scss': require('!raw-loader!./examples/basic-form.scss'),
        'search-field.html': require('!raw-loader!./examples/search-field.html'),
        'search-field.ts': require('!raw-loader!./examples/search-field.ts'),
        'search-field.scss': require('!raw-loader!./examples/search-field.scss'),
        'checkboxes.html': require('!raw-loader!./examples/checkboxes.html'),
        'checkboxes.ts': require('!raw-loader!./examples/checkboxes.ts'),
        'checkboxes.scss': require('!raw-loader!./examples/checkboxes.scss'),
        'radio-buttons.html': require('!raw-loader!./examples/radio-buttons.html'),
        'radio-buttons.ts': require('!raw-loader!./examples/radio-buttons.ts'),
        'radio-buttons.scss': require('!raw-loader!./examples/radio-buttons.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
