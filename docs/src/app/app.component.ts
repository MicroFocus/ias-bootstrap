import { Component, Host, HostBinding, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @HostBinding('class.ias-page') iasPage: Host = true;

    iasStyleActive = true;

    constructor(private renderer: Renderer2) {
    }

    toggleIasStyles() {
        this.iasStyleActive = !this.iasStyleActive;

        if (this.iasStyleActive) {
            this.renderer.addClass(document.documentElement, 'ias-app');
        } else {
            this.renderer.removeClass(document.documentElement, 'ias-app');
        }
    }
}
