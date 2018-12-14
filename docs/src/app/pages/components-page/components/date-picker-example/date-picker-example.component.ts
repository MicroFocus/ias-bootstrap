import { Component } from '@angular/core';

declare var require;

@Component({
    selector: 'app-date-picker-example',
    templateUrl: './date-picker-example.component.html',
    styleUrls: ['./date-picker-example.component.scss']
})
export class DatePickerExampleComponent {
    exampleFiles = {
        'date-picker-basic.html': require('!raw-loader!./examples/date-picker-basic.html'),
        'date-picker-basic.ts': require('!raw-loader!./examples/date-picker-basic.ts'),
        'date-picker-basic.scss': require('!raw-loader!./examples/date-picker-basic.scss'),
        'date-picker-advanced.html': require('!raw-loader!./examples/date-picker-advanced.html'),
        'date-picker-advanced.ts': require('!raw-loader!./examples/date-picker-advanced.ts'),
        'date-picker-advanced.scss': require('!raw-loader!./examples/date-picker-advanced.scss'),
    };
}
