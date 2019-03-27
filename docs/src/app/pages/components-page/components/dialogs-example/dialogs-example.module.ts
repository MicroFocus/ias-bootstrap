import { NgModule } from '@angular/core';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { CommonModule } from '@angular/common';
import { DialogBasicModule } from './examples/dialog-basic.module';
import { DialogsExampleComponent } from './dialogs-example.component';

@NgModule({
    declarations: [
        DialogsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        DialogBasicModule
    ],
    exports: [
        DialogsExampleComponent
    ]
})
export class DialogsExampleModule {
    constructor() {
    }
}
