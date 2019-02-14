import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tags-example',
    templateUrl: './tags-example.component.html',
    styleUrls: ['./tags-example.component.scss']
})
export class TagsExampleComponent implements OnInit {
    exampleFiles = {
        'tags-in-combobox.html': require('!raw-loader!./examples/tags-in-combobox.html'),
        'tags-in-combobox.ts': require('!raw-loader!./examples/tags-in-combobox.ts'),
        'tags-in-combobox.scss': require('!raw-loader!./examples/tags-in-combobox.scss'),
        'tags-in-dropdown.html': require('!raw-loader!./examples/tags-in-dropdown.html'),
        'tags-in-dropdown.ts': require('!raw-loader!./examples/tags-in-dropdown.ts'),
        'tags-in-dropdown.scss': require('!raw-loader!./examples/tags-in-dropdown.scss'),
        'tags-microfocus.component.html': require('!raw-loader!./examples/tags-microfocus.component.html'),
        'tags-microfocus.component.ts': require('!raw-loader!./examples/tags-microfocus.component.ts'),
        'tags-microfocus.component.scss': require('!raw-loader!./examples/tags-microfocus.component.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
