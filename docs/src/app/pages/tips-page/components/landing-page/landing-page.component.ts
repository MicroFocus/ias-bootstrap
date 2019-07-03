import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    exampleFiles = {
        'standard-landing-page.html': require('!raw-loader!./examples/standard-landing-page.html'),
        'standard-landing-page.ts': require('!raw-loader!./examples/standard-landing-page.ts'),

        'min-landing-page.html': require('!raw-loader!./examples/min-landing-page.html'),
        'min-landing-page.ts': require('!raw-loader!./examples/min-landing-page.ts'),
    };

  constructor() { }

  ngOnInit() {
  }

}
