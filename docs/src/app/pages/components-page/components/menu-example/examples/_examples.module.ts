import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardMenusComponent } from './standard-menus';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule, StringFilterModule } from '@ux-aspects/ux-aspects';
import { SplitButtonMenusComponent } from './split-button-menus';

@NgModule({
    declarations: [
        StandardMenusComponent,
        SplitButtonMenusComponent
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
        SplitButtonMenusComponent
    ]
})
export class MenuExamplesModule {
}
