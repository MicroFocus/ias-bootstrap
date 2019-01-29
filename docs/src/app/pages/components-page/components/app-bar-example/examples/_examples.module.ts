import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBarBasicComponent } from './app-bar-basic';
import { AppBarSecondaryComponent } from './app-bar-secondary';
import { AppRoutingModule } from '../../../../../app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
        AppBarBasicComponent,
        AppBarSecondaryComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        AppBarBasicComponent,
        AppBarSecondaryComponent
    ]
})
export class AppBarExamplesModule {
}
