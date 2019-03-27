import { Component } from '@angular/core';

declare const require;

@Component({
    selector: 'app-date-picker-example',
    templateUrl: './date-picker-example.component.html',
    styleUrls: ['./date-picker-example.component.scss']
})
export class DatePickerExampleComponent {
    exampleFiles = {
        'date-picker-basic.component.html': require('!raw-loader!./examples/date-picker-basic.component.html'),
        'date-picker-basic.component.scss': require('!raw-loader!./examples/date-picker-basic.component.scss'),
        'date-picker-basic.component.ts': require('!raw-loader!./examples/date-picker-basic.component.ts'),
        'date-picker-basic.module.ts': require('!raw-loader!./examples/date-picker-basic.module.ts'),

        'date-picker-advanced.component.html': require('!raw-loader!./examples/date-picker-advanced.component.html'),
        'date-picker-advanced.component.scss': require('!raw-loader!./examples/date-picker-advanced.component.scss'),
        'date-picker-advanced.component.ts': require('!raw-loader!./examples/date-picker-advanced.component.ts'),
        'date-picker-advanced.module.ts': require('!raw-loader!./examples/date-picker-advanced.module.ts'),
    };
}
