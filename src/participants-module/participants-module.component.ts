import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

interface Participant {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  cepi: string;
  address: string;
  raffle: string;
  numTickets: number;
  totalPay: number;
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

  constructor(private app:AppComponent) {}

  ngOnInit(): void {
    this.app.className='component'
    this.participants = [
      {
        name: 'Pedro Rivera',
        cpf: "CPFEXAMPLE",
        email: "example@email.com",
        phone: "+55 999 9999",
        cepi: "5001",
        address: "Direccion de ejemplo",
        raffle: "Rifa de moto",
        numTickets: 3,
        totalPay: 500,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Jose Garcia',
        cpf: "CPFEXAMPLE",
        email: "example@email.com",
        phone: "+55 999 9999",
        cepi: "5001",
        address: "Direccion de ejemplo",
        raffle: "Rifa de carro",
        numTickets: 2,
        totalPay: 700,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Esteba Rodriguez',
        cpf: "CPFEXAMPLE",
        email: "example@email.com",
        phone: "+55 999 9999",
        cepi: "5001",
        address: "Direccion de ejemplo",
        raffle: "Rifa de casa",
        numTickets: 1,
        totalPay: 800,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Pablo Chacon',
        cpf: "CPFEXAMPLE",
        email: "example@email.com",
        phone: "+55 999 9999",
        cepi: "5001",
        address: "Direccion de ejemplo",
        raffle: "Rifa de apartamento",
        numTickets: 4,
        totalPay: 1000,
        date: new Date().toLocaleDateString('es'),
      },
      {
        name: 'Juan Sanchez',
        cpf: "CPFEXAMPLE",
        email: "example@email.com",
        phone: "+55 999 9999",
        cepi: "5001",
        address: "Direccion de ejemplo",
        raffle: "Rifa de telefono",
        numTickets: 6,
        totalPay: 300,
        date: new Date().toLocaleDateString('es'),
      },
    ];
  }
}
