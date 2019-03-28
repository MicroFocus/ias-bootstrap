import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../../../../components/common-components.module';
import { TilesExampleComponent } from './tiles-example.component';
import { BasicTilesModule } from './basic-tiles/basic-tiles.module';
import { LargeTilesModule } from './large-tiles/large-tiles.module';
import { MediumTilesModule } from './medium-tiles/medium-tiles.module';
import { SmallTilesModule } from './small-tiles/small-tiles.module';
import { TileGridModule } from './tile-grid/tile-grid.module';

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
