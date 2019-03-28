import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { DatePickerAdvancedModule } from './date-picker-advanced/date-picker-advanced.module';
import { DatePickerExampleComponent } from './date-picker-example.component';
import { DatePickerBasicModule } from './date-picker-basic/date-picker-basic.module';


@NgModule({
    declarations: [
        DatePickerExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        DatePickerBasicModule,
        DatePickerAdvancedModule,
    ],
    exports: [
        DatePickerExampleComponent
    ]
})
export class DatePickerExampleModule {
    constructor() {
    }
}
