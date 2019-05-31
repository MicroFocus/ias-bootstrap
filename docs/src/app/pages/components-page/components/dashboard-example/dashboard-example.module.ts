import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { DashboardExampleComponent } from './dashboard-example.component';
import { DashboardBasicModule } from './dashboard-basic/dashboard-basic.module';

@NgModule({
    declarations: [
        DashboardExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        DashboardBasicModule
    ],
    exports: [
        DashboardExampleComponent
    ],
})
export class DashboardExampleModule { }
