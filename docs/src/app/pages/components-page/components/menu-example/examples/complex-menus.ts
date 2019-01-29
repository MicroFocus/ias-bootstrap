import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-complex-menus',
    templateUrl: './complex-menus.html',
    styleUrls: ['./complex-menus.scss']
})
export class ComplexMenusComponent implements OnInit {
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
