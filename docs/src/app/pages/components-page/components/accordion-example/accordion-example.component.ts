import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-accordion-example',
    templateUrl: './accordion-example.component.html',
    styleUrls: ['./accordion-example.component.scss']
})
export class AccordionExampleComponent implements OnInit {
    exampleFiles = {
        'accordion-basic.component.html': require('!raw-loader!./accordion-basic/accordion-basic.component.html'),
        'accordion-basic.component.ts': require('!raw-loader!./accordion-basic/accordion-basic.component.ts'),
        'accordion-basic.module.ts': require('!raw-loader!./accordion-basic/accordion-basic.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
