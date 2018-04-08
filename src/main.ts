import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// main.ts file is used to run the app module from "app/app.module.ts"
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
