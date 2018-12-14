import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-dialog-basic',
    templateUrl: './dialog-basic.html'
})
export class DialogBasicComponent implements OnInit {
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnInit() {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
}
