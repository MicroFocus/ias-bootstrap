import { Component, OnInit, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { DateTimePickerTimezone } from '@ux-aspects/ux-aspects';
import { Subscription } from 'rxjs/Subscription';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-date-picker-example',
    templateUrl: './date-picker-example.component.html',
    styleUrls: ['./date-picker-example.component.scss']
})
export class DatePickerExampleComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('input') dateInput: ElementRef;

    date: Date = new Date();
    timezone: DateTimePickerTimezone = { name: 'GMT', offset: 0 };

    showTime: boolean = true;
    showTimezones: boolean = true;
    showMeridians: boolean = true;
    showSpinners: boolean = true;
    subscription: Subscription;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.subscription = fromEvent(this.dateInput.nativeElement, 'input')
            .pipe(debounceTime(500))
            .subscribe(event => this.parse(this.dateInput.nativeElement.value));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    parse(value: string): void {

        // try and parse the date
        const date = new Date(value);

        // check if the date is valid
        if (!isNaN(date.getDate())) {
            this.date = date;
        }
    }
}
