import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { HeadersExampleComponent } from './headers-example.component';
import { StandardHeadersModule } from './examples/standard-headers.module';

@NgModule({
    declarations: [
        HeadersExampleComponent,
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        StandardHeadersModule,
    ],
    exports: [
        HeadersExampleComponent,
    ]
})
export class HeadersExampleModule {
    constructor() {
    }
}
