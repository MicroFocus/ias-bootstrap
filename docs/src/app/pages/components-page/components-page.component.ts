import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-components-page',
    templateUrl: './components-page.component.html',
    styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {

    navigation: NavigationItem[] = [
        { title: 'Accordion', routerLink: '/components/accordion' },
        { title: 'App Bar (Masthead)', routerLink: '/components/app-bar' },
        { title: 'Buttons', routerLink: '/components/buttons' },
        // { title: 'Comments', routerLink: '/components/comments' },
        { title: 'Date Picker', routerLink: '/components/date-picker' },
        { title: 'Dialogs (Modals)', routerLink: '/components/dialogs' },
        { title: 'Form Fields', routerLink: '/components/form-field' },
        { title: 'Form Validation', routerLink: '/components/form-validation' },
        { title: 'Headers', routerLink: '/components/headers' },
        { title: 'Icons', routerLink: '/components/icons' },
        { title: 'Links', routerLink: '/components/links' },
        { title: 'Lists', routerLink: '/components/lists' },
        { title: 'Menus (Dropdowns)', routerLink: '/components/menu' },
        { title: 'Panels', routerLink: '/components/panels' },
        { title: 'Progress', routerLink: '/components/progress' },
        { title: 'Side Navs', routerLink: '/components/side-navs' },
        { title: 'Status Messages', routerLink: '/components/status-messages' },
        { title: 'Tables', routerLink: '/components/table' },
        { title: 'Tabs', routerLink: '/components/tabs' },
        { title: 'Tags', routerLink: '/components/tags' },
        { title: 'Tiles', routerLink: '/components/tiles' },
        { title: 'Tile Grids', routerLink: '/components/tile-grids' },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
