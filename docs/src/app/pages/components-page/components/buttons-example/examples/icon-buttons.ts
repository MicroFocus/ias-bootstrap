import {Component} from '@angular/core';

@Component({
    selector: 'app-icon-buttons',
    templateUrl: './icon-buttons.html',
    styles: ['button { margin: 0 5px 5px 0; } .results { margin-top: 20px; } ']
})
export class IconButtonsComponent {
    timesButtonPressed = 0;

    buttonPressed(): void {
        this.timesButtonPressed++;
    }
}

