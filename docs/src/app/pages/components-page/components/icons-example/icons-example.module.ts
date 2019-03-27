import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { IconSizesModule } from './examples/icon-sizes.module';
import { IconsExampleComponent } from './icons-example.component';

@NgModule({
    declarations: [
        IconsExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        IconSizesModule,
    ],
    exports: [
        IconsExampleComponent
    ]
})
export class IconsExampleModule {
    constructor() {
    }
}
