import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { TestModule } from './test/test.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TestModule)
    .catch(err => console.error(err));
