import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { MenuExampleComponent } from './menu-example.component';
import { ComplexMenusModule } from './examples/complex-menus.module';
import { SplitButtonMenusModule } from './examples/split-button-menus.module';
import { StandardMenusModule } from './examples/standard-menus.module';

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
