import { Component } from '@angular/core';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
    cartoonCharacters = [
        { name: 'Fred Flintstone',  email: 'fred.flintstone@flintstones.tv',  tvShow: 'The Flintstones' },
        { name: 'Wilma Flintstone', email: 'wilma.flintstone@flintstones.tv', tvShow: 'The Flintstones' },
        { name: 'Barney Rubble',    email: 'barney.rubble@flintstones.tv',    tvShow: 'The Flintstones' },
        { name: 'Betty Rubble',     email: 'betty.rubble@flintstones.tv',     tvShow: 'The Flintstones' },
        { name: 'George Jetson',    email: 'george.jetson@jetsons.tv',        tvShow: 'The Jetsons' },
        { name: 'Jane Jetson',      email: 'jane.jetson@jetsons.tv',          tvShow: 'The Jetsons' },
        { name: 'Elroy Jetson',     email: 'elroy.jetson@jetsons.tv',         tvShow: 'The Jetsons' },
        { name: 'Judy Jetson',      email: 'judy.jetson@jetsons.tv',          tvShow: 'The Jetsons' },
    ];

    constructor() {
    }
}
