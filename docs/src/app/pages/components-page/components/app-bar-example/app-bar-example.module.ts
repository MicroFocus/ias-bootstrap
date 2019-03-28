import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { AppBarExampleComponent } from './app-bar-example.component';
import { AppBarBasicModule } from './app-bar-basic/app-bar-basic.module';
import { AppBarSecondaryModule } from './app-bar-secondary/app-bar-secondary.module';

@NgModule({
    declarations: [
        AppBarExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        AppBarBasicModule,
        AppBarSecondaryModule,
    ],
    exports: [
        AppBarExampleComponent,
    ]
})
export class AppBarExampleModule {
    constructor() {
    }
}
