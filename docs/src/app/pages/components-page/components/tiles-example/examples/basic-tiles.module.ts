import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTilesComponent } from './basic-tiles.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
    declarations: [
        BasicTilesComponent,
    ],
    imports: [
        CommonModule,
        AngularSplitModule,
    ],
    exports: [
        BasicTilesComponent,
    ]
})
export class BasicTilesModule {
}
