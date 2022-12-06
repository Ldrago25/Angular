import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RafflesComponent } from 'src/raffles-module/raffles-module.component';
import { RafflesUserComponent } from 'src/raffles-user-module/raffles-user-module.component';
import { ParticipantComponent } from 'src/participants-module/participants-module.component';
import { MenuComponent } from 'src/menuComponente-module/menu-component-module.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    RafflesComponent,
    ParticipantComponent,
    RafflesUserComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    InputTextModule,
    CardModule,
    InputTextareaModule,
    MenuModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    PaginatorModule,
    SplitButtonModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
