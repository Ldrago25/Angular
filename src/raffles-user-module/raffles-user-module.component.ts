import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/menu-module/menu-component-module.service';
import { AppComponent } from 'src/app/app.component';

interface Raffle {
  name: string;
  price: number;
  tickets: number;
  date: string;
}

interface Image {
  src: string;
}

@Component({
  selector: 'app-raffles-user',
  templateUrl: './raffles-user-module.component.html',
  styleUrls: ['./raffles-user-module.component.css'],
})
export class RafflesUserComponent implements OnInit {
  price: number = 140;
  cant: number = 300;
  tickets: number[] = [];
  arrayTick: number[] = [];
  arraySelecteds: number[] = [];
  priceTotal: number = 0;

  images: Image[] = [
    {
      src: 'https://img.remediosdigitales.com/dc72b3/bmw-m-1000-rr-2021-003/840_560.jpg',
    },
    {
      src: 'https://www.mundomotero.com/wp-content/uploads/2018/11/Honda-S-1000-RR-2019.jpg',
    },
    {
      src: 'https://bd.gaadicdn.com/processedimages/bmw/s1000rr/source/v_s1000rr-pro-m-sport1561625847.jpg',
    },
    {
      src: 'https://images.unsplash.com/photo-1635073908681-b4dfbd6015e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwczEwMDBycnxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
  ];
  constructor(private menuService: MenuService, private app: AppComponent) {}

  ngOnInit(): void {
    this.app.className = 'no-menu-component';
    this.menuService.changeshowMenu = false;
    this.chargeTickets();
  }

  chargeTickets() {
    for (let i = 0; i < 300; i++) {
      this.tickets[i] = i + 1;
    }
    for (let i = 0; i < 50; i++) {
      this.arrayTick[i] = this.tickets[i];
    }
  }

  paginate(event: any) {
    for (let i = event.page * 50; i < 50 * (event.page + 1); i++) {
      this.arrayTick[i - event.page * 50] = this.tickets[i];
    }
  }

  select(ticket: number) {
    this.arraySelecteds.push(ticket);
    this.priceTotal += this.price;
  }

  noSelect(ticket: number) {
    this.arraySelecteds = this.arraySelecteds.filter((tick) => tick != ticket);
    this.priceTotal -= this.price;
  }

  findSelect(ticket: number) {
    for (let i = 0; i < this.arraySelecteds.length; i++) {
      if (ticket == this.arraySelecteds[i]) {
        return true;
      }
    }

    return false;
  }
}
