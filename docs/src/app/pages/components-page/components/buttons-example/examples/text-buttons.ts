import {Component} from '@angular/core';

@Component({
    selector: 'app-text-buttons',
    templateUrl: './text-buttons.html',
    styles: ['.results { margin-top: 20px; } ']
})
export class TextButtonsComponent {
    timesButtonPressed = 0;

    buttonPressed(): void {
        this.timesButtonPressed++;
    }
}
