import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-tips-page',
    templateUrl: './tips-page.component.html',
    styleUrls: ['./tips-page.component.scss']
})
export class TipsPageComponent implements OnInit {
    @HostBinding('class.page-with-nav') someClass: Host = true;

    navigation: NavigationItem[] = [
        { title: 'Standard Layouts', routerLink: '/tips-and-tricks/standard-layout' },
        { title: 'Login Page', routerLink: '/tips-and-tricks/login-page' },
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
