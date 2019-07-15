import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {
    exampleFiles = {
        'standard-panel-layout.html': require('!raw-loader!./examples/standard-panel-layout.html'),
        'standard-panel-layout.ts': require('!raw-loader!./examples/standard-panel-layout.ts'),

        'split-panel-layout.html': require('!raw-loader!./examples/split-panel-layout.html'),
        'split-panel-layout.ts': require('!raw-loader!./examples/split-panel-layout.ts'),
    };

  constructor() { }

  ngOnInit() {
  }

}
