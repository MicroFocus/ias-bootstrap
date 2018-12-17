import { Component, Renderer2 } from '@angular/core';
import { PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    iasStyleActive = true;

    constructor(private renderer: Renderer2) {
    }

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
            icon: 'hpe-view-filled hpe-lg',
            label: 'Toggle',
            select: (menu: PageHeaderIconMenu) => {
                this.iasStyleActive = !this.iasStyleActive;

                if (this.iasStyleActive) {
                    this.renderer.addClass(document.documentElement, 'ias-app');
                    menu.icon = 'hpe-view-filled hpe-lg';
                } else {
                    this.renderer.removeClass(document.documentElement, 'ias-app');
                    menu.icon = 'hpe-view hpe-lg';
                }
            }
        },
        // {
        //     icon: 'hpe-help-circle hpe-lg',
        //     label: 'Help',
        //     dropdown: [
        //         {
        //             title: 'About UX Aspects...'
        //         }
        //     ]
        // }
    ];
}
