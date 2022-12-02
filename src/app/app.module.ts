import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { RafflesComponent } from 'src/raffles-module/raffles-module.component';
@NgModule({
  declarations: [
    AppComponent,
    RafflesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
