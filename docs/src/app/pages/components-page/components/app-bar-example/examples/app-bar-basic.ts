import {Component} from '@angular/core';
import { PageHeaderIconMenu, PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-bar-basic',
    templateUrl: './app-bar-basic.html'
})
export class AppBarBasicComponent {
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
