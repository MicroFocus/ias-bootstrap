import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTilesComponent } from './basic-tiles';
import { TileGridComponent } from './tile-grid';

@NgModule({
    declarations: [
        BasicTilesComponent,
        TileGridComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BasicTilesComponent,
        TileGridComponent,
    ]
})
export class TilesExamplesModule {
}
