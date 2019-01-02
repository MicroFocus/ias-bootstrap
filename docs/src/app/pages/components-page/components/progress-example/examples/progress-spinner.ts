import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-progress-spinner',
    templateUrl: './progress-spinner.html',
    styleUrls: ['./progress-spinner.scss']
})
export class ProgressSpinnerComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
