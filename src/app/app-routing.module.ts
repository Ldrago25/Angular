import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RafflesComponent } from 'src/raffles-module/raffles-module.component';

const routes: Routes = [
  { path: 'RafflesComponent', component: RafflesComponent },
  { path: '',   redirectTo: 'RafflesComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
