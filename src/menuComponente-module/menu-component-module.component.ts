import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu-component-module.component.html',
  styleUrls: ['./menu-component-module.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }


  ngOnInit(): void {
    this.items = [
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  ];
  }
}
