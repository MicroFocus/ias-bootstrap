import { Component, OnInit, ViewChild } from '@angular/core';
import { SidePanelComponent } from '@ux-aspects/ux-aspects';

@Component({
    selector: 'app-standard-side-panel',
    templateUrl: './standard-side-panel.component.html',
    styleUrls: ['./standard-side-panel.component.scss']
})
export class StandardSidePanelComponent implements OnInit {
    @ViewChild('standardSidePanel') standardSidePanel: SidePanelComponent;

    constructor() {
    }

    ngOnInit() {
    }

    openSidePanel() {
        this.standardSidePanel.openPanel();
    }

    closeSidePanel() {
        this.standardSidePanel.closePanel();
    }
}
