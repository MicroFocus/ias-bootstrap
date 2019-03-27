import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tiles-example',
    templateUrl: './tiles-example.component.html',
    styleUrls: ['./tiles-example.component.scss']
})
export class TilesExampleComponent implements OnInit {
    exampleFiles = {
        'basic-tiles.component.html': require('!raw-loader!./examples/basic-tiles.component.html'),
        'basic-tiles.component.scss': require('!raw-loader!./examples/basic-tiles.component.scss'),
        'basic-tiles.component.ts': require('!raw-loader!./examples/basic-tiles.component.ts'),
        'basic-tiles.module.ts': require('!raw-loader!./examples/basic-tiles.module.ts'),

        'tile-grid.component.html': require('!raw-loader!./examples/tile-grid.component.html'),
        'tile-grid.component.scss': require('!raw-loader!./examples/tile-grid.component.scss'),
        'tile-grid.component.ts': require('!raw-loader!./examples/tile-grid.component.ts'),
        'tile-grid.module.ts': require('!raw-loader!./examples/tile-grid.module.ts'),

        'small-tiles.component.html': require('!raw-loader!./examples/small-tiles.component.html'),
        'small-tiles.component.scss': require('!raw-loader!./examples/small-tiles.component.scss'),
        'small-tiles.component.ts': require('!raw-loader!./examples/small-tiles.component.ts'),
        'small-tiles.module.ts': require('!raw-loader!./examples/small-tiles.module.ts'),

        'medium-tiles.component.html': require('!raw-loader!./examples/medium-tiles.component.html'),
        'medium-tiles.component.scss': require('!raw-loader!./examples/medium-tiles.component.scss'),
        'medium-tiles.component.ts': require('!raw-loader!./examples/medium-tiles.component.ts'),
        'medium-tiles.module.ts': require('!raw-loader!./examples/medium-tiles.module.ts'),

        'large-tiles.component.html': require('!raw-loader!./examples/large-tiles.component.html'),
        'large-tiles.component.scss': require('!raw-loader!./examples/large-tiles.component.scss'),
        'large-tiles.component.ts': require('!raw-loader!./examples/large-tiles.component.ts'),
        'large-tiles.module.ts': require('!raw-loader!./examples/large-tiles.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
