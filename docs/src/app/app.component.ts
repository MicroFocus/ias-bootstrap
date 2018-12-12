import { Component } from '@angular/core';
import { PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    navBarItems: PageHeaderNavigationItem[] = [
        {
            title: '',
            selected: true,
            children: [
                { title: 'Components', routerLink: '/components' },
                { title: 'Getting Started', routerLink: '/getting-started' },
                { title: 'Tips and Tricks', routerLink: '/tips-and-tricks' }
            ]
        }
    ];

    iconMenus: PageHeaderIconMenu[] = [
        {
            icon: 'hpe-help-circle hpe-lg',
            label: 'Help',
            dropdown: [
                {
                    title: 'About UX Aspects...'
                }
            ]
        }
    ];
}
