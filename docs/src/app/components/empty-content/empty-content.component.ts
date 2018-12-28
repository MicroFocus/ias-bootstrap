import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-empty-content',
    templateUrl: './empty-content.component.html',
    styleUrls: ['./empty-content.component.scss']
})
export class EmptyContentComponent implements OnInit {
    contentText: string;

    constructor(private outlet: RouterOutlet) {
        this.contentText = outlet.activatedRouteData['content'];
    }

    ngOnInit() {
    }

}
