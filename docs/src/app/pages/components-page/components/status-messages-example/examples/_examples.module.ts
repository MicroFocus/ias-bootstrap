import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardMessagesComponent } from './standard-messages';

@NgModule({
    declarations: [
        StandardMessagesComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        StandardMessagesComponent
    ]
})
export class MessagesExamplesModule {
}
