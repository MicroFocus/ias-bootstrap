import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-field-by-field',
    templateUrl: './field-by-field.component.html',
    styleUrls: ['./field-by-field.component.scss']
})
export class FieldByFieldComponent implements OnInit {
    projectName: string;
    ownerEmail: string;

    constructor() {
    }

    ngOnInit() {
    }
}
