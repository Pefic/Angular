import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalcardComponent } from './animalcard/animalcard.component';
import { HttpClientModule } from '@angular/common/http';
import { GiocoComponent } from './gioco/gioco.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalcardComponent,
    GiocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
