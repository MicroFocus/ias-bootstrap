import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
    declarations: [
        TestComponent,
    ],
    imports: [
        BrowserModule,
        TestRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [TestComponent]
})
export class TestModule {
}
