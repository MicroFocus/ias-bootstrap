import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-accordion-basic',
    templateUrl: './accordion-basic.component.html'
})
export class AccordionBasicComponent {
    collapseOthersOnOpen = new FormControl(false);
}
