import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { TilesExampleComponent } from './tiles-example.component';
import { BasicTilesModule } from './examples/basic-tiles.module';
import { LargeTilesModule } from './examples/large-tiles.module';
import { MediumTilesModule } from './examples/medium-tiles.module';
import { SmallTilesModule } from './examples/small-tiles.module';
import { TileGridModule } from './examples/tile-grid.module';

@NgModule({
    declarations: [
        TilesExampleComponent
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,

        BasicTilesModule,
        LargeTilesModule,
        MediumTilesModule,
        SmallTilesModule,
        TileGridModule,
    ],
    exports: [
        TilesExampleComponent
    ]
})
export class TilesExampleModule {
    constructor() {
    }
}
