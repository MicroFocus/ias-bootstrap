import { Component } from '@angular/core';

@Component({
    selector: 'app-date-picker-basic',
    templateUrl: './date-picker-basic.component.html',
    styleUrls: ['./date-picker-basic.component.scss']
})
export class DatePickerBasicComponent {
    date: Date = new Date();
}
