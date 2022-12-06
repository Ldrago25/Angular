import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RafflesComponent } from 'src/raffles-module/raffles-module.component';
import { ParticipantComponent } from 'src/participants-module/participants-module.component';
import { RafflesUserComponent } from 'src/raffles-user-module/raffles-user-module.component';

const routes: Routes = [
  { path: 'RafflesComponent', component: RafflesComponent },
  { path: 'ParticipantComponent', component: ParticipantComponent },
  { path: 'RafflesUserComponent', component: RafflesUserComponent },
  { path: '',   redirectTo: 'RafflesComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
