import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-component-module.component.html',
  styleUrls: ['./menu-component-module.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Sorteios',
      icon: 'pi pi-ticket',
      command: () => {
        this.update2();
      },
    },
    {
      label: 'Compradores',
      icon: 'pi pi-users',
      command: () => {
        this.update1();
      },
    },
    {
      label: 'Fechar Sessão',
      icon: 'pi pi-sign-in',
      command: () => {
        this.update3();
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  update3() {}
  update2() {}
  update1() {}
}
