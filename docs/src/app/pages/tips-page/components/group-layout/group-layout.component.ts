import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-group-layout',
  templateUrl: './group-layout.component.html',
  styleUrls: ['./group-layout.component.scss']
})
export class GroupLayoutComponent implements OnInit {
    exampleFiles = {
        'swim-lane-layout.html': require('!raw-loader!./examples/swim-lane-layout.html'),
        'swim-lane-layout.ts': require('!raw-loader!./examples/swim-lane-layout.ts'),
    };
  constructor() { }

  ngOnInit() {
  }

}
