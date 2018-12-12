import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-dialogs-example',
    templateUrl: './dialogs-example.component.html',
    styleUrls: ['./dialogs-example.component.scss']
})
export class DialogsExampleComponent implements OnInit {

    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnInit() {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {
            class: 'my-modal-wrapper'
        });
    }
}
