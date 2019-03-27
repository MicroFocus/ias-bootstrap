import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { LinksExampleComponent } from './links-example.component';
import { StandardLinksModule } from './examples/standard-links.module';

@NgModule({
    declarations: [
        LinksExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        StandardLinksModule,
    ],
    exports: [
        LinksExampleComponent
    ]
})
export class LinksExampleModule {
    constructor() {
    }
}
