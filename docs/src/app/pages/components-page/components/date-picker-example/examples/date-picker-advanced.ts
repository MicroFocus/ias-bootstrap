import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DateTimePickerTimezone, PopoverComponent } from '@ux-aspects/ux-aspects';
import { fromEvent, interval, Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
    selector: 'app-date-picker-advanced',
    templateUrl: './date-picker-advanced.html',
    styleUrls: ['./date-picker-advanced.scss']
})
export class DatePickerAdvancedComponent implements AfterViewInit, OnDestroy {
    @ViewChild('input') dateInput: ElementRef;

    date: Date = new Date();
    timezone: DateTimePickerTimezone = { name: 'GMT', offset: 0 };

    showTime = true;
    showTimezones = true;
    showMeridians = true;
    showSpinners = true;
    subscription: Subscription;

    ngAfterViewInit(): void {
        this.subscription = fromEvent(this.dateInput.nativeElement, 'input')
            .pipe(
                debounce(() => interval(500))
            )
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
