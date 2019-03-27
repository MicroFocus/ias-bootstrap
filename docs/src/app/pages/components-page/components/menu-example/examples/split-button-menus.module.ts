import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule, StringFilterModule } from '@ux-aspects/ux-aspects';
import { SplitButtonMenusComponent } from './split-button-menus.component';

@NgModule({
    declarations: [
        SplitButtonMenusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        MenuNavigationModule,
    ],
    exports: [
        SplitButtonMenusComponent
    ]
})
export class SplitButtonMenusModule {
}
