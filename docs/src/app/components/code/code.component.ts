import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CodeHighlightService } from '../../services/code-highlight.service';

@Component({
    selector: 'app-ngbd-code',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <pre class="language-{{ lang }}"><code #code class="language-{{ lang }}"></code></pre>
    `
})
export class CodeComponent implements AfterViewInit {

    @ViewChild('code', { static: true }) codeEl: ElementRef<HTMLElement>;

    @Input() code = '';
    @Input() lang = '';

    constructor(
        private _service: CodeHighlightService
    ) {
    }

    ngAfterViewInit() {
        if (typeof this.code === 'object') {
            this.code = (this.code as any).default;
        }

        this.codeEl.nativeElement.innerHTML = this._service.highlight(this.code, this.lang);
    }
}
