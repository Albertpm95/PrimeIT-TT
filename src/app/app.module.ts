import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomErrorHandler } from '@services/custom-error-handler';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: CustomErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
