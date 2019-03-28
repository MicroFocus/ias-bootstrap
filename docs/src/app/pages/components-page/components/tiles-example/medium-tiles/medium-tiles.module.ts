import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { MediumTilesComponent } from './medium-tiles.component';

@NgModule({
    declarations: [
        MediumTilesComponent,
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        MediumTilesComponent,
    ]
})
export class MediumTilesModule {
}
