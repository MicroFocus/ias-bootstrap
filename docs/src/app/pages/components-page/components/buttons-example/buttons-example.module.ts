import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { ButtonsExampleComponent } from './buttons-example.component';
import { IconButtonsModule } from './examples/icon-buttons.module';
import { IconTextButtonsModule } from './examples/icon-text-buttons.module';
import { TextButtonsModule } from './examples/text-buttons.module';

@NgModule({
    declarations: [
        ButtonsExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        IconButtonsModule,
        IconTextButtonsModule,
        TextButtonsModule,
    ],
    exports: [
        ButtonsExampleComponent,
    ]
})
export class ButtonsExampleModule {
    constructor() {
    }
}
