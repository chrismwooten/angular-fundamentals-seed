//This allows us to have our browser dynamically update as we make changes.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Bootstrapping the root module for our application:  AppModule
platformBrowserDynamic().bootstrapModule(AppModule);
