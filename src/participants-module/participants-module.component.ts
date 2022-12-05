import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Participant {
  name: string;
  price: number;
  tickets: number;
  date: string;
}

@Component({
  selector: 'app-participants',
  templateUrl: './participants-module.component.html',
  styleUrls: ['./participants-module.component.css'],
  styles: [
    `
      :host ::ng-deep table {
        width: 100%;
      }
    `,
  ],
})
export class ParticipantComponent implements OnInit {
  participants: Participant[] = [];

  constructor() {}

  ngOnInit(): void {
    this.participants = [
      {
        name: 'Rifa de moto',
        price: 200,
        tickets: 1000,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Rifa de carro',
        price: 300,
        tickets: 2000,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Rifa de telefono',
        price: 500,
        tickets: 7000,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Rifa de casa',
        price: 800,
        tickets: 10000,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Rifa de apartamento',
        price: 1000,
        tickets: 10000,
        date: new Date().toLocaleDateString('es'),
      },
    ];
  }
}