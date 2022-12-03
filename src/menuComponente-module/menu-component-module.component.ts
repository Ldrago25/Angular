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

  items: MenuItem[]=[
    {label: 'New', icon: 'pi pi-refresh',command: () => {
      this.update2();
  }},
    {label: 'Open', icon: 'pi pi-times',command: () => {
      this.update1();
  }},
  ];

  constructor() { }


  ngOnInit(): void {
  }

  update2(){}
  update1(){}
}
