import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-components-page',
    templateUrl: './components-page.component.html',
    styleUrls: ['./components-page.component.scss'],
})
export class ComponentsPageComponent implements OnInit {
    @HostBinding('class.ias-content-with-nav') someClass: Host = true;

    navigation: NavigationItem[] = [
        { title: 'Accordion', routerLink: '/components/accordion' },
        { title: 'Activity Indicator', routerLink: '/components/activity-indicator' },
        { title: 'App Bar (Masthead)', routerLink: '/components/app-bar' },
        { title: 'Buttons', routerLink: '/components/buttons' },
        // { title: 'Comments', routerLink: '/components/comments' },
        { title: 'Color Picker', routerLink: '/components/color-picker' },
        { title: 'Date Picker', routerLink: '/components/date-picker' },
        { title: 'Dialogs (Modals)', routerLink: '/components/dialogs' },
        { title: 'Form Fields', routerLink: '/components/form-field' },
        { title: 'Form Fields (Advanced)', routerLink: '/components/form-field-advanced' },
        { title: 'Form Validation', routerLink: '/components/form-validation' },
        { title: 'Headers', routerLink: '/components/headers' },
        { title: 'Icons', routerLink: '/components/icons' },
        { title: 'Links', routerLink: '/components/links' },
        { title: 'Lists', routerLink: '/components/lists' },
        { title: 'Menus (Dropdowns)', routerLink: '/components/menu' },
        { title: 'Panels', routerLink: '/components/panels' },
        { title: 'Progress', routerLink: '/components/progress' },
        { title: 'Side Navs', routerLink: '/components/side-navs' },
        { title: 'Side Panels', routerLink: '/components/side-panels' },
        { title: 'Status Messages', routerLink: '/components/status-messages' },
        { title: 'Tables', routerLink: '/components/table' },
        { title: 'Tabs', routerLink: '/components/tabs' },
        { title: 'Tags', routerLink: '/components/tags' },
        { title: 'Tiles', routerLink: '/components/tiles' },
        { title: 'Wizard', routerLink: '/components/wizard'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
