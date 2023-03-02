import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import function to register Swiper custom elements


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
