import {Component} from '@angular/core';

@Component({
    selector: 'app-simple-layout',
    templateUrl: './simple-layout.html',
    styleUrls: ['./simple-layout.scss']
})
export class SimpleLayoutComponent {
    cancelButtonPressed(): void {}
    closeButtonPressed(): void {}
    saveButtonPressed(): void {}
}
