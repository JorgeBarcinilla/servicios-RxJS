import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ComparativaJavascriptRxjsComponent } from './components/comparativa-javascript-rxjs/comparativa-javascript-rxjs.component';

export const myDev = new InjectionToken<{is_dev: boolean}>('IS_DEV')

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ComparativaJavascriptRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: myDev,
    useValue: {is_dev: true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
