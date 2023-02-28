import { ErrorHandler } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomErrorHandler } from '@services/custom-error-handler';
import { AppComponent } from 'app/app.component';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    }
  ]
})