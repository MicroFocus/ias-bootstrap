import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MenuNavigationModule, StringFilterModule } from '@ux-aspects/ux-aspects';
import { ComplexMenusComponent } from './complex-menus.component';

@NgModule({
    declarations: [
        ComplexMenusComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        MenuNavigationModule,
    ],
    exports: [
        ComplexMenusComponent
    ]
})
export class ComplexMenusModule {
}
