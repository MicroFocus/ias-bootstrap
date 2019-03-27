import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tags-example',
    templateUrl: './tags-example.component.html',
    styleUrls: ['./tags-example.component.scss']
})
export class TagsExampleComponent implements OnInit {
    exampleFiles = {
        'tags-in-combobox.component.html': require('!raw-loader!./examples/tags-in-combobox.component.html'),
        'tags-in-combobox.component.scss': require('!raw-loader!./examples/tags-in-combobox.component.scss'),
        'tags-in-combobox.component.ts': require('!raw-loader!./examples/tags-in-combobox.component.ts'),
        'tags-in-combobox.module.ts': require('!raw-loader!./examples/tags-in-combobox.module.ts'),

        'tags-in-dropdown.component.html': require('!raw-loader!./examples/tags-in-dropdown.component.html'),
        'tags-in-dropdown.component.scss': require('!raw-loader!./examples/tags-in-dropdown.component.scss'),
        'tags-in-dropdown.component.ts': require('!raw-loader!./examples/tags-in-dropdown.component.ts'),
        'tags-in-dropdown.module.ts': require('!raw-loader!./examples/tags-in-dropdown.module.ts'),

        'tags-microfocus.component.html': require('!raw-loader!./examples/tags-microfocus.component.html'),
        'tags-microfocus.component.scss': require('!raw-loader!./examples/tags-microfocus.component.scss'),
        'tags-microfocus.component.ts': require('!raw-loader!./examples/tags-microfocus.component.ts'),
        'tags-microfocus.module.ts': require('!raw-loader!./examples/tags-microfocus.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
