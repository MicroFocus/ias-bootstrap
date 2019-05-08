import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.scss']
})
export class PaginationButtonsComponent implements OnInit {
    currentPage = 1;
    totalItems = 100;
    itemsPerPage = 10;
    totalPages: number;
    maxSize = 5;

  constructor() { }

  ngOnInit() {
  }

}
