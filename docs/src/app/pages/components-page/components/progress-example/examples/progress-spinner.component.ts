import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
