import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tiles-example',
    templateUrl: './tiles-example.component.html',
    styleUrls: ['./tiles-example.component.scss']
})
export class TilesExampleComponent implements OnInit {
    exampleFiles = {
        'basic-tiles.html': require('!raw-loader!./examples/basic-tiles.html'),
        'basic-tiles.ts': require('!raw-loader!./examples/basic-tiles.ts'),
        'basic-tiles.scss': require('!raw-loader!./examples/basic-tiles.scss'),
        'tile-grid.html': require('!raw-loader!./examples/tile-grid.html'),
        'tile-grid.ts': require('!raw-loader!./examples/tile-grid.ts'),
        'tile-grid.scss': require('!raw-loader!./examples/tile-grid.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
