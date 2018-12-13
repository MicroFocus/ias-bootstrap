import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-example-file',
    template: '',
    styleUrls: ['./example-file.component.scss']
})
export class ExampleFileComponent implements OnInit {
    @Input() name: string;
    @Input() lang: string;

    constructor() {
    }

    ngOnInit() {
    }
}
