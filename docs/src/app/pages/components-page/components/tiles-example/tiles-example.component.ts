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
        'small-tiles.html': require('!raw-loader!./examples/small-tiles.html'),
        'small-tiles.ts': require('!raw-loader!./examples/small-tiles.ts'),
        'small-tiles.scss': require('!raw-loader!./examples/small-tiles.scss'),
        'medium-tiles.html': require('!raw-loader!./examples/medium-tiles.html'),
        'medium-tiles.ts': require('!raw-loader!./examples/medium-tiles.ts'),
        'medium-tiles.scss': require('!raw-loader!./examples/medium-tiles.scss'),
        'large-tiles.html': require('!raw-loader!./examples/large-tiles.html'),
        'large-tiles.ts': require('!raw-loader!./examples/large-tiles.ts'),
        'large-tiles.scss': require('!raw-loader!./examples/large-tiles.scss'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
