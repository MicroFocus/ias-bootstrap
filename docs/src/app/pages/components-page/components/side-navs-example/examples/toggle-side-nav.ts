import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NavigationItem, PageHeaderIconMenu } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-toggle-side-nav',
    templateUrl: './toggle-side-nav.html',
    styleUrls: ['./toggle-side-nav.scss']
})
export class ToggleSideNavComponent {
    navigation: NavigationItem[] = [
        {
            title: 'Dashboard', icon: 'hpe-dashboard',
            routerLink: ['/components/side-navs', {outlets: {'toggleable-outlet': ['toggleable-dashboard']}}],
        },
        {
            title: 'Products', icon: 'hpe-service-business',
            routerLink: ['/components/side-navs', {outlets: {'toggleable-outlet': ['toggleable-products']}}],
        },
        {
            title: 'Reports', icon: 'hpe-compliance',
            routerLink: ['/components/side-navs', {outlets: {'toggleable-outlet': ['toggleable-reports']}}],
        },
        {
            title: 'Alerts', icon: 'hpe-alert',
            routerLink: ['/components/side-navs', {outlets: {'toggleable-outlet': ['toggleable-alerts']}}],
        },
        {
            title: 'Favorites', icon: 'hpe-star',
            routerLink: ['/components/side-navs', {outlets: {'toggleable-outlet': ['toggleable-favorites']}}],
        },
    ];

    iconMenus: PageHeaderIconMenu[] = [
        { icon: 'hpe-help-circle hpe-lg', label: 'Help', dropdown: [{ title: 'About This Application...' }] }
    ];

    active = this.navigation[0];
    sideMenuOpen = true;

    toggleSideMenu(): void {
        this.sideMenuOpen = !this.sideMenuOpen;
    }
}
