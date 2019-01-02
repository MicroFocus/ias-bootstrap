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
        'horizontal-form.html': require('!raw-loader!./examples/horizontal-form.html'),
        'horizontal-form.ts': require('!raw-loader!./examples/horizontal-form.ts'),
        'horizontal-form.scss': require('!raw-loader!./examples/horizontal-form.scss'),
        'search-field.html': require('!raw-loader!./examples/search-field.html'),
        'search-field.ts': require('!raw-loader!./examples/search-field.ts'),
        'search-field.scss': require('!raw-loader!./examples/search-field.scss'),
        'select-fields.html': require('!raw-loader!./examples/select-fields.html'),
        'select-fields.ts': require('!raw-loader!./examples/select-fields.ts'),
        'select-fields.scss': require('!raw-loader!./examples/select-fields.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
