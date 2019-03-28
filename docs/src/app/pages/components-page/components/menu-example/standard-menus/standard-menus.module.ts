import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule, StringFilterModule } from '@ux-aspects/ux-aspects';
import { StandardMenusComponent } from './standard-menus.component';

@NgModule({
    declarations: [
        StandardMenusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        MenuNavigationModule,
    ],
    exports: [
        StandardMenusComponent
    ]
})
export class StandardMenusModule {
}
