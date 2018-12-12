import {Component} from '@angular/core';

@Component({
    selector: 'app-special-text-buttons',
    templateUrl: './special-text-buttons.html',
    styles: ['.results { margin-top: 20px; } ']
})
export class SpecialTextButtonsComponent {
    timesButtonPressed = 0;

    buttonPressed(): void {
        this.timesButtonPressed++;
    }
}
