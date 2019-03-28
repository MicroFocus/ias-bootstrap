import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { MenuExampleComponent } from './menu-example.component';
import { ComplexMenusModule } from './complex-menus/complex-menus.module';
import { SplitButtonMenusModule } from './split-button-menus/split-button-menus.module';
import { StandardMenusModule } from './standard-menus/standard-menus.module';

@NgModule({
    declarations: [
        MenuExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        ComplexMenusModule,
        SplitButtonMenusModule,
        StandardMenusModule,
    ],
    exports: [
        MenuExampleComponent
    ]
})
export class MenuExampleModule {
    constructor() {
    }
}
