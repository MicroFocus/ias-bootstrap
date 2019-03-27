import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { LargeTilesComponent } from './large-tiles.component';

@NgModule({
    declarations: [
        LargeTilesComponent,
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        LargeTilesComponent,
    ]
})
export class LargeTilesModule {
}
