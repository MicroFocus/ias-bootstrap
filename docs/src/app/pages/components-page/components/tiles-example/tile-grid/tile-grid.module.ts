import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileGridComponent } from './tile-grid.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
    declarations: [
        TileGridComponent
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        TileGridComponent
    ]
})
export class TileGridModule {
}
