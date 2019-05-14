import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-action-buttons',
  templateUrl: './floating-action-buttons.component.html',
  styleUrls: ['./floating-action-buttons.component.scss']
})
export class FloatingActionButtonsComponent implements OnInit {
    direction = 'bottom';

    get placement(): string {
        return this.direction === 'top' || this.direction === 'bottom' ? 'right' : 'top';
    }
  constructor() { }

  ngOnInit() {
  }

}
