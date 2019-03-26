import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
    searchText: FormControl;

    constructor() {
        this.searchText = new FormControl('');
    }

    ngOnInit() {
    }

    clear() {
        this.searchText.setValue('');
    }
}
