import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-form-field-example',
    templateUrl: './form-field-example.component.html',
    styleUrls: ['./form-field-example.component.scss']
})
export class FormFieldExampleComponent implements OnInit {
    exampleFiles = {
        'basic-form.component.html': require('!raw-loader!./basic-form/basic-form.component.html'),
        'basic-form.component.scss': require('!raw-loader!./basic-form/basic-form.component.scss'),
        'basic-form.component.ts': require('!raw-loader!./basic-form/basic-form.component.ts'),
        'basic-form.module.ts': require('!raw-loader!./basic-form/basic-form.module.ts'),

        'search-field.component.html': require('!raw-loader!./search-field/search-field.component.html'),
        'search-field.component.scss': require('!raw-loader!./search-field/search-field.component.scss'),
        'search-field.component.ts': require('!raw-loader!./search-field/search-field.component.ts'),
        'search-field.module.ts': require('!raw-loader!./search-field/search-field.module.ts'),

        'checkboxes.component.html': require('!raw-loader!./checkboxes/checkboxes.component.html'),
        'checkboxes.component.scss': require('!raw-loader!./checkboxes/checkboxes.component.scss'),
        'checkboxes.component.ts': require('!raw-loader!./checkboxes/checkboxes.component.ts'),
        'checkboxes.module.ts': require('!raw-loader!./checkboxes/checkboxes.module.ts'),

        'radio-buttons.component.html': require('!raw-loader!./radio-buttons/radio-buttons.component.html'),
        'radio-buttons.component.scss': require('!raw-loader!./radio-buttons/radio-buttons.component.scss'),
        'radio-buttons.component.ts': require('!raw-loader!./radio-buttons/radio-buttons.component.ts'),
        'radio-buttons.module.ts': require('!raw-loader!./radio-buttons/radio-buttons.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }
}
