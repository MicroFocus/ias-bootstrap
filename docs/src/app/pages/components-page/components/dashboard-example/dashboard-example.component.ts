import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-dashboard-example',
  templateUrl: './dashboard-example.component.html',
  styleUrls: ['./dashboard-example.component.scss']
})
export class DashboardExampleComponent implements OnInit {

    exampleFiles = {
        'dashboard-basic.component.html': require('!raw-loader!./dashboard-basic/dashboard-basic.component.html'),
        'dashboard-basic.component.scss': require('!raw-loader!./dashboard-basic/dashboard-basic.component.scss'),
        'dashboard-basic.component.ts': require('!raw-loader!./dashboard-basic/dashboard-basic.component.ts'),
        'dashboard-basic.module.ts': require('!raw-loader!./dashboard-basic/dashboard-basic.module.ts'),
    };

  constructor() { }

  ngOnInit() {
  }

}
