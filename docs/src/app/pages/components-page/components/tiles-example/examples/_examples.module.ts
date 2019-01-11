import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTilesComponent } from './basic-tiles';
import { TileGridComponent } from './tile-grid';
import { AngularSplitModule } from 'angular-split';
import { SmallTilesComponent } from './small-tiles';
import { MediumTilesComponent } from './medium-tiles';
import { LargeTilesComponent } from './large-tiles';

@NgModule({
    declarations: [
        BasicTilesComponent,
        LargeTilesComponent,
        MediumTilesComponent,
        SmallTilesComponent,
        TileGridComponent
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        BasicTilesComponent,
        LargeTilesComponent,
        MediumTilesComponent,
        SmallTilesComponent,
        TileGridComponent
    ]
})
export class TilesExamplesModule {
}
