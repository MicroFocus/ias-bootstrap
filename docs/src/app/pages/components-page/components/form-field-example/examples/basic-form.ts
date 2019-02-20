import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.html',
    styleUrls: ['./basic-form.scss']
})
export class BasicFormComponent implements OnInit {
    formDisabled = false;

    constructor() {
    }

    ngOnInit() {
    }
}
