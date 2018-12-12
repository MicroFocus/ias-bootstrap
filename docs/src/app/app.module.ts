import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DateTimePickerModule, PageHeaderModule } from '@ux-aspects/ux-aspects';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ButtonsExampleComponent } from './pages/components-page/components/buttons-example/buttons-example.component';
import { AccordionExampleComponent } from './pages/components-page/components/accordion-example/accordion-example.component';
import { DialogsExampleComponent } from './pages/components-page/components/dialogs-example/dialogs-example.component';
import { DatePickerExampleComponent } from './pages/components-page/components/date-picker-example/date-picker-example.component';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsPageComponent,
        ProjectPageComponent,
        ButtonsExampleComponent,
        AccordionExampleComponent,
        DialogsExampleComponent,
        DatePickerExampleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PageHeaderModule,
        // DateTimePickerModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
