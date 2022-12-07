import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { MenuService } from './menu-component-module.service';

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

  showMenuItem:boolean=true;

  constructor(private showMenuItems: MenuService,private route:Router) {}

  ngOnInit(): void {
    this.showMenuItems.showMenu$.subscribe((resp)=>{
      console.log(resp);
      this.showMenuItem=resp;
    });

  }


  changeRoute(){
    console.log('asd');
    this.route.navigate(['RafflesComponent']);
  }


  update3() {}
  update2() {}
  update1() {}
}
