import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RafflesComponent } from 'src/raffles-module/raffles-module.component';
import { MenuComponent } from 'src/menuComponente-module/menu-component-module.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [AppComponent, RafflesComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    InputTextModule,
    CardModule,
    InputTextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
