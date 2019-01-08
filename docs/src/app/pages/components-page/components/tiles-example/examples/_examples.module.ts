import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTilesComponent } from './basic-tiles';
import { TileGridComponent } from './tile-grid';
import { AngularSplitModule } from 'angular-split';

@NgModule({
    declarations: [
        BasicTilesComponent,
        TileGridComponent,
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        BasicTilesComponent,
        TileGridComponent,
    ]
})
export class TilesExamplesModule {
}