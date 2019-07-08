import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { NavigationItem } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-tips-page',
    templateUrl: './tips-page.component.html',
    styleUrls: ['./tips-page.component.scss']
})
export class TipsPageComponent implements OnInit {
    @HostBinding('class.ias-content-with-nav') someClass: Host = true;

    navigation: NavigationItem[] = [
        { title: 'Standard Layouts', routerLink: '/tips-and-tricks/standard-layout' },
        { title: 'Login Page', routerLink: '/tips-and-tricks/login-page' },
        { title: 'Landing Page', routerLink: '/tips-and-tricks/landing-page' },
        { title: 'Panel Layouts', routerLink: '/tips-and-tricks/panel-layout' },
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
