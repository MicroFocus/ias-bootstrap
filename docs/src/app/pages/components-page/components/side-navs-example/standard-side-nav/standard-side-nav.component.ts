import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NavigationItem, PageHeaderIconMenu } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-standard-side-nav',
    templateUrl: './standard-side-nav.component.html',
    styleUrls: ['./standard-side-nav.component.scss']
})
export class StandardSideNavComponent {
    navigation: NavigationItem[] = [
        {
            title: 'Dashboard',
            routerLink: ['/components/side-navs', {outlets: {'standard-outlet': ['standard-dashboard']}}]
        },
        {
            title: 'Products, with a long title causing the text to wrap',
            routerLink: ['/components/side-navs', {outlets: {'standard-outlet': ['standard-products']}}]
        },
        {
            title: 'Reports',
            routerLink: ['/components/side-navs', {outlets: {'standard-outlet': ['standard-reports']}}]
        },
        {
            title: 'Alerts',
            routerLink: ['/components/side-navs', {outlets: {'standard-outlet': ['standard-alerts']}}]
        },
        {
            title: 'Favorites',
            routerLink: ['/components/side-navs', {outlets: {'standard-outlet': ['standard-favorites']}}]
        },
    ];
}
