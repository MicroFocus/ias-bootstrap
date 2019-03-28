import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { SideNavsExampleComponent } from './side-navs-example.component';
import { StandardSideNavModule } from './standard-side-nav/standard-side-nav.module';
import { ToggleSideNavModule } from './toggle-side-nav/toggle-side-nav.module';

@NgModule({
    declarations: [
        SideNavsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        StandardSideNavModule,
        ToggleSideNavModule,
    ],
    exports: [
        SideNavsExampleComponent
    ]
})
export class SideNavsExampleModule {
    constructor() {
    }
}
