import { Component, OnInit } from '@angular/core';

declare var require;

@Component({
    selector: 'app-accordion-example',
    templateUrl: './accordion-example.component.html',
    styleUrls: ['./accordion-example.component.scss']
})
export class AccordionExampleComponent implements OnInit {
    exampleFiles = {
        'accordion-basic.html': require('!raw-loader!./examples/accordion-basic.html'),
        'accordion-basic.ts': require('!raw-loader!./examples/accordion-basic.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
