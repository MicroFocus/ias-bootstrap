import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.html',
    styleUrls: ['./search-field.scss']
})
export class SearchFieldComponent implements OnInit {
    searchText: string;

    constructor() {
    }

    ngOnInit() {
    }

    clear() {
        this.searchText = '';
    }
}
