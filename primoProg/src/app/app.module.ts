import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasellaTestoComponent } from './casella-testo/casella-testo.component';
import { Ct2Component } from './ct2/ct2.component';

@NgModule({
  declarations: [
    AppComponent,
    CasellaTestoComponent,
    Ct2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
