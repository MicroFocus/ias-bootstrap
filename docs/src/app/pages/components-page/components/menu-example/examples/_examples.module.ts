import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule, StringFilterModule } from '@ux-aspects/ux-aspects';
import { StandardMenusComponent } from './standard-menus';
import { SplitButtonMenusComponent } from './split-button-menus';
import { ComplexMenusComponent } from './complex-menus';

@NgModule({
    declarations: [
        StandardMenusComponent,
        SplitButtonMenusComponent,
        ComplexMenusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        MenuNavigationModule,
        StringFilterModule
    ],
    exports: [
        StandardMenusComponent,
        SplitButtonMenusComponent,
        ComplexMenusComponent
    ]
})
export class MenuExamplesModule {
}
