import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardBasicComponent } from './dashboard-basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessibilityModule, ColorServiceModule, DashboardModule, SparkModule } from '@ux-aspects/ux-aspects';
import 'chance';
import 'chart.js';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        DashboardBasicComponent
    ],
    imports: [
        AccessibilityModule,
        BrowserModule,
        BrowserAnimationsModule,
        ChartsModule,
        ColorServiceModule,
        CommonModule,
        DashboardModule,
        FormsModule,
        ReactiveFormsModule,
        SparkModule,
    ],
    exports: [
        DashboardBasicComponent
    ],
})

export class DashboardBasicModule {
    constructor() {
    }
}
