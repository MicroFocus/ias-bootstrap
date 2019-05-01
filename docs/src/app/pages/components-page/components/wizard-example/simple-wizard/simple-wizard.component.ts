import { Component } from '@angular/core';
import { LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
    selector: 'app-simple-wizard',
    templateUrl: './simple-wizard.component.html',
    styleUrls: ['./simple-wizard.component.scss']
})
export class SimpleWizardComponent {
    orientation = 'vertical';
    steps: WizardStep[] = [
        {   header: 'First Step',
            title: 'Step 1 - Title',
            content: 'Content placeholder for step 1.'
        },
        {   header: 'Second Step',
            title: 'Step 2 - Title',
            content: 'Content placeholder for step 2'
        },
        {   header: 'Third Step',
            title: 'Step 3 - Title',
            content: 'Content placeholder for step 3.'
        },
        {   header: 'Fourth Step',
            title: 'Step 4 - Title',
            content: 'Content placeholder for step 4.'
        },
        {   header: 'Fifth Step',
            title: 'Step 5 - Title',
            content: 'Content placeholder for step 5.'
        },
        {   header: 'Sixth Step',
            title: 'Step 6 - Title',
            content: 'Content placeholder for step 6.'
        }
    ];

    constructor(private _announcer: LiveAnnouncer) {}
    onStepChange(index: number): void {
        this._announcer.announce('${this.steps[index].header} activated');
    }
}

export interface WizardStep {
    content: string;
    header: string;
    title: string;
}
