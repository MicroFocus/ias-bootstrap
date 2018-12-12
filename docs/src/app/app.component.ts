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
                { title: 'Project', routerLink: '/project' },
                { title: 'Components', routerLink: '/components' },
                { title: 'Tips and Tricks' },
                { title: 'Icons' }
                // { title: 'Dashboard', routerLink: '/showcase/dashboard' },
                // { title: 'Filtering', routerLink: '/showcase/filtering' },
                // { title: 'Login 1', routerLink: '/showcase/login1' },
                // { title: 'Login 2', routerLink: '/showcase/login2' }
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
