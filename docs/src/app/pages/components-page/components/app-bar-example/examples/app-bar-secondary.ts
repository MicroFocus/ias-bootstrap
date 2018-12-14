import {Component} from '@angular/core';
import { PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-bar-secondary',
    templateUrl: './app-bar-secondary.html'
})
export class AppBarSecondaryComponent {
    navBarItems: PageHeaderNavigationItem[] = [
        {
            title: '',
            selected: true,
            children: [
                { title: 'Link 1' },
                { title: 'Link 2' },
                { title: 'LInk 3' }
            ]
        }
    ];

    iconMenus: PageHeaderIconMenu[] = [
        {
            icon: 'hpe-help-circle hpe-lg',
            label: 'Help',
            dropdown: [
                {
                    title: 'About This Application...'
                }
            ]
        }
    ];
}
