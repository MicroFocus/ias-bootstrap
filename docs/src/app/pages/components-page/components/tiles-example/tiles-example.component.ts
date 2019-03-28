import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
    selector: 'app-tiles-example',
    templateUrl: './tiles-example.component.html',
    styleUrls: ['./tiles-example.component.scss']
})
export class TilesExampleComponent implements OnInit {
    exampleFiles = {
        'basic-tiles.component.html': require('!raw-loader!./basic-tiles/basic-tiles.component.html'),
        'basic-tiles.component.scss': require('!raw-loader!./basic-tiles/basic-tiles.component.scss'),
        'basic-tiles.component.ts': require('!raw-loader!./basic-tiles/basic-tiles.component.ts'),
        'basic-tiles.module.ts': require('!raw-loader!./basic-tiles/basic-tiles.module.ts'),

        'tile-grid.component.html': require('!raw-loader!./tile-grid/tile-grid.component.html'),
        'tile-grid.component.scss': require('!raw-loader!./tile-grid/tile-grid.component.scss'),
        'tile-grid.component.ts': require('!raw-loader!./tile-grid/tile-grid.component.ts'),
        'tile-grid.module.ts': require('!raw-loader!./tile-grid/tile-grid.module.ts'),

        'small-tiles.component.html': require('!raw-loader!./small-tiles/small-tiles.component.html'),
        'small-tiles.component.scss': require('!raw-loader!./small-tiles/small-tiles.component.scss'),
        'small-tiles.component.ts': require('!raw-loader!./small-tiles/small-tiles.component.ts'),
        'small-tiles.module.ts': require('!raw-loader!./small-tiles/small-tiles.module.ts'),

        'medium-tiles.component.html': require('!raw-loader!./medium-tiles/medium-tiles.component.html'),
        'medium-tiles.component.scss': require('!raw-loader!./medium-tiles/medium-tiles.component.scss'),
        'medium-tiles.component.ts': require('!raw-loader!./medium-tiles/medium-tiles.component.ts'),
        'medium-tiles.module.ts': require('!raw-loader!./medium-tiles/medium-tiles.module.ts'),

        'large-tiles.component.html': require('!raw-loader!./large-tiles/large-tiles.component.html'),
        'large-tiles.component.scss': require('!raw-loader!./large-tiles/large-tiles.component.scss'),
        'large-tiles.component.ts': require('!raw-loader!./large-tiles/large-tiles.component.ts'),
        'large-tiles.module.ts': require('!raw-loader!./large-tiles/large-tiles.module.ts'),
    };

    constructor() {
    }

    ngOnInit() {
    }

}
