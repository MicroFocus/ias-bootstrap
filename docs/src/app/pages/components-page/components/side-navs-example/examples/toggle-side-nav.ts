import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-toggle-side-nav',
    templateUrl: './toggle-side-nav.html',
    styleUrls: ['./toggle-side-nav.scss']
})
export class ToggleSideNavComponent {
    navigation: NavigationItem[] = [
        {
            title: 'Dashboard',
            icon: 'hpe-dashboard'
        },
        {
            title: 'Products',
            icon: 'hpe-service-business'
        },
        {
            title: 'Reports',
            icon: 'hpe-compliance'
        },
        {
            title: 'Alerts',
            icon: 'hpe-alert'
        },
        {
            title: 'Favorites',
            icon: 'hpe-star'
        },
        {
            title: 'Settings',
            icon: 'hpe-actions'
        },
        {
            title: 'Account',
            icon: 'hpe-user',
            children: [{
                title: 'Add Account',
            },
                {
                    title: 'Edit Account',
                }]
        },
    ];

    active = this.navigation[0];
    sidePanelOpen = false;

    toggleSidePanel(): void {
        this.sidePanelOpen = !this.sidePanelOpen;
    }
}
