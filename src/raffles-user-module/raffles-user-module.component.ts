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

  constructor() {}

  ngOnInit(): void {

  }
}