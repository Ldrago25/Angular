import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { RafflesListService } from './raffles-list-module.service';
import { Raffle } from 'src/models/Raffle';
import * as moment from 'moment';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/menu-module/menu-component-module.service';

@Component({
  selector: 'app-raffles-list',
  templateUrl: './raffles-list-module.component.html',
  styleUrls: ['./raffles-list-module.component.css'],
  styles: [
    `
      :host ::ng-deep table {
        width: 100%;
      }
    `,
  ],
})
export class RafflesListComponent implements OnInit {
  raffles: Raffle[] = [{}];
  files: File[] = [];
  formData: FormGroup = new FormGroup({});
  actions: MenuItem[];
  auxIDRaffles: number;

  constructor(
    private app: AppComponent,
    private _form: FormBuilder,
    private _serviceListRaffles: RafflesListService,
    private menuService: MenuService,
  ) {}

  ngOnInit(): void {
    this.app.className = 'no-menu-component';
    this.menuService.changeshowMenu = false;
    this.getRaffles();
  }

  changeID(id: number) {
    this.auxIDRaffles = id;
    console.log(this.auxIDRaffles);
  }

  date(value: string) {
    let date = new Date(value);
    moment.locale('es');

    return moment(date).format('DD-MM-YYYY');
  }

  getRaffles() {
    this._serviceListRaffles.getRaffles().subscribe((resp) => {
      if (resp) {
        this.raffles = resp;
      }

      console.log(this.raffles);
    });
  }

}