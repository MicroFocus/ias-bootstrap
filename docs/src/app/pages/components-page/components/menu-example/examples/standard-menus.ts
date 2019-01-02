import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-standard-menus',
    templateUrl: './standard-menus.html',
    styleUrls: ['./standard-menus.scss']
})
export class StandardMenusComponent implements OnInit {
    cases = [
        'Alpha',
        'Beta',
        'Gamma',
        'Delta',
        'Epsilon',
        'Zeta',
        'Eta',
        'Theta',
        'Iota',
        'Kappa',
        'Alpha 2',
        'Alpha 3',
    ];
    caseFilter = '';

    constructor() {
    }

    ngOnInit() {
    }
}
