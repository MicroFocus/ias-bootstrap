import { Component } from '@angular/core';

@Component({
    selector: 'app-date-picker-basic',
    templateUrl: './date-picker-basic.html',
    styleUrls: ['./date-picker-basic.scss']
})
export class DatePickerBasicComponent {
    date: Date = new Date();
}
