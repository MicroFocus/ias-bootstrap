import { NgModule } from '@angular/core';
import { ExampleFileComponent } from './example-file/example-file.component';
import { ExampleComponent } from './example/example.component';
import { EmptyContentComponent } from './empty-content/empty-content.component';
import { CodeComponent } from './code/code.component';
import { CodeHighlightService } from '../services/code-highlight.service';
import { NavigationModule, SidePanelModule, TabsetModule } from '@ux-aspects/ux-aspects';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ExampleComponent,
        ExampleFileComponent,
        EmptyContentComponent,
        CodeComponent,
    ],
    imports: [
        CommonModule,
        SidePanelModule,
        TabsetModule,
    ],
    exports: [
        ExampleComponent,
        ExampleFileComponent,
        EmptyContentComponent,
        CodeComponent,
    ],
    providers: [
        CodeHighlightService
    ]
})
export class CommonComponentsModule {
    constructor() {
    }
}
