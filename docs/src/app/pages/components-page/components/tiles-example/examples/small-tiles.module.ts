import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { SmallTilesComponent } from './small-tiles.component';

@NgModule({
    declarations: [
        SmallTilesComponent,
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        SmallTilesComponent,
    ]
})
export class SmallTilesModule {
}
