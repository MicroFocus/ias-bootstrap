import {Component} from '@angular/core';

@Component({
    selector: 'app-icon-buttons',
    templateUrl: './icon-buttons.component.html',
    styles: ['.btn-container { margin-bottom: 10px; } .btn-container > .btn + .btn.btn-link {margin-left: 10px; }']
})
export class IconButtonsComponent {
}

