import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { StandardTabsModule } from './examples/standard-tabs.module';
import { TabsExampleComponent } from './tabs-example.component';

@NgModule({
    declarations: [
        TabsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        StandardTabsModule
    ],
    exports: [
        TabsExampleComponent
    ]
})
export class TabsExampleModule {
    constructor() {
    }
}
