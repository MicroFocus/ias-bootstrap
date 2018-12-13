import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { ExampleFileComponent } from '../example-file/example-file.component';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
    @Input() heading: string;
    @Input() fileNameToContentsMap: any;

    @ContentChildren(ExampleFileComponent) files: QueryList<ExampleFileComponent>;

    visible: boolean;

    constructor() {
    }

    ngOnInit() {
    }
}
