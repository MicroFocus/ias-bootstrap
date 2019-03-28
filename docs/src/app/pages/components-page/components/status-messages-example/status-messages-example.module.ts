import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { StandardMessagesModule } from './standard-messages/standard-messages.module';
import { StatusMessagesExampleComponent } from './status-messages-example.component';

@NgModule({
    declarations: [
        StatusMessagesExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        StandardMessagesModule,
    ],
    exports: [
        StatusMessagesExampleComponent
    ]
})
export class StatusMessagesExampleModule {
    constructor() {
    }
}
