import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Raffle {
  name: string;
  price: number;
  tickets: number;
  date: string;
}

@Component({
  selector: 'app-raffles-user',
  templateUrl: './raffles-user-module.component.html',
  styleUrls: ['./raffles-user-module.component.css'],
})
export class RafflesUserComponent implements OnInit {
  price: number = 140;
  cant: number = 1200;
  tickets: number[] = [];
  arrayTick: number[] = [];
  constructor() {}

  ngOnInit(): void {
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
}
