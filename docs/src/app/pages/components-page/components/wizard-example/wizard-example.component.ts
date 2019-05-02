import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-wizard-example',
  templateUrl: './wizard-example.component.html',
  styleUrls: ['./wizard-example.component.scss']
})
export class WizardExampleComponent implements OnInit {
    exampleFiles = {
        'simple-wizard.component.html': require('!raw-loader!./simple-wizard/simple-wizard.component.html'),
        'simple-wizard.component.scss': require('!raw-loader!./simple-wizard/simple-wizard.component.scss'),
        'simple-wizard.component.ts': require('!raw-loader!./simple-wizard/simple-wizard.component.ts'),

        'marquee-wizard.component.html': require('!raw-loader!./marquee-wizard/marquee-wizard.component.html'),
        'marquee-wizard.component.scss': require('!raw-loader!./marquee-wizard/marquee-wizard.component.scss'),
        'marquee-wizard.component.ts': require('!raw-loader!./marquee-wizard/marquee-wizard.component.ts'),
    };

  constructor() { }

  ngOnInit() {
  }

}
