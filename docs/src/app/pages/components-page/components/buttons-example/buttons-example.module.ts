import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { ButtonsExampleComponent } from './buttons-example.component';
import { IconButtonsModule } from './icon-buttons/icon-buttons.module';
import { IconTextButtonsModule } from './icon-text-buttons/icon-text-buttons.module';
import { PaginationButtonsModule } from './pagination-buttons/pagination-buttons.module';
import { TextButtonsModule } from './text-buttons/text-buttons.module';

@NgModule({
    declarations: [
        ButtonsExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        IconButtonsModule,
        IconTextButtonsModule,
        PaginationButtonsModule,
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
