import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.html',
    styleUrls: ['./progress-bar.scss']
})
export class ProgressBarComponent {
    value = 15;

    randomize() {
        this.value = Math.floor((Math.random() * 100) + 1);
    }
}
