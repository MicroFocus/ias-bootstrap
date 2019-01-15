import { Component, OnInit } from '@angular/core';
import * as stripIndent from 'strip-indent';

@Component({
    selector: 'app-getting-started',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
    codeBlock_installIasBootstrap = '$ npm install @microfocus/ias-bootstrap';
    codeBlock_createAngularProject = stripIndent(`
        $ ng new MyApp
        $ cd MyApp
    `);
    codeBlock_installDeps = `$ npm install @ux-aspects/ux-aspects @microfocus/ias-bootstrap;`;
    codeBlock_addStyles = stripIndent(`
        "styles": [
            "node_modules/bootstrap/dist/css/bootstrap.css",
            "node_modules/@ux-aspects/ux-aspects/styles/ux-aspects.css",
            "node_modules/@microfocus/ias-bootstrap/dist/ias-bootstrap.css",
            "node_modules/@microfocus/ias-icons/dist/ias-icons.css",
            "src/styles.css"
        ],
    `);
    codeBlock_runApp = `$ ng serve`;
    codeBlock_addComponents = stripIndent(`
        <div class="btn-container">
            <button type="button" class="btn btn-default">Text Button</button>
            <button type="button" class="btn btn-default" disabled>Disabled Text Button</button>
        </div>
    `);

    constructor() {
    }

    ngOnInit() {
    }

}
