import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tags-microfocus',
    templateUrl: './tags-microfocus.component.html',
    styleUrls: ['./tags-microfocus.component.scss']
})
export class TagsMicrofocusComponent implements OnInit {
    active = true;
    display = 'none';
    input: string;
    placeholder = 'Create Tag';
    selectFirst = true;
    typeaheadEnabled = true;
    selected: string[] = ['Alpha', 'Beta', 'Kappa', 'Gamma'];
    options: string[] = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa',
        'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi',
        'Psi', 'Omega'];

    constructor() {
    }

    ngOnInit() {
    const tagList = document.querySelector('#microfocus-tag-list');
        this.selected.forEach(function(element) {
            tagList.innerHTML +=
                '<li class="ux-tag">' +
                '<span class="ux-tag-text">' + element + '</span>' +
                '<button type="button" class="ux-tag-remove">' +
                '<span class="hpe-icon hpe-close"></span>' +
                '</button>' +
                '</li>';
        });
    document.querySelectorAll('.ux-tag-remove').forEach(function(element) {
        element.setAttribute('onclick', 'removeTag($event)');
    });
    }

    toggleInput() {
        this.active = !this.active;
        (this.active ? this.display = 'inherit' : this.display = 'none');
        document.querySelector('input').style.display = this.display;
    }
    addTag(el) {
        if (el !== '') {
            this.selected.push(el);
            console.log(this.selected);
            document.querySelector('#microfocus-tag-list').innerHTML +=
                '<li class="ux-tag">' +
                '<span class="ux-tag-text">' + el + '</span>' +
                '<button type="button" class="ux-tag-remove" (click)="removeTag($event)">' +
                '<span class="hpe-icon hpe-close"></span>' +
                '</button>' +
                '</li>';
        }
        document.querySelector('input').value = '';
    }
    removeTag(el) {
        console.log(el);
    }
}
