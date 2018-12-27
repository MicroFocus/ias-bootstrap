import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.html',
    styleUrls: ['./progress-bar.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    value: number = 0;
    max: number = 100;

    private _timer: any;

    constructor() {
    }

    ngOnInit(): void {
        this.increment();
    }

    ngOnDestroy(): void {
        clearInterval(this._timer);
    }

    private increment() {
        if (this.value + 1 > this.max) {
            this.value = this.max;
            this._timer = setTimeout(() => this.reset(), 2000);
        } else {
            this.value += 1;
            this._timer = setTimeout(() => this.increment(), 100);
        }
    }

    private reset() {
        this.value = 0;
        this._timer = setTimeout(() => this.increment(), 1000);
    }
}
