import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenuService } from 'src/menu-module/menu-component-module.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rifas-app';
  className:String='';
  /**
    @DefaultConstruct
  */
  constructor(private primengConfig: PrimeNGConfig, private router:Router, private menuService: MenuService){
  }
  /**
    @implements
  */
  ngOnInit() {
    console.log(this.router.url);
    this.router.events.subscribe( (event) => {

      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if(event.url=='/RafflesComponent'){
          this.className='component';
        }
        if(event.url=='/ParticipantComponent'){
          this.className='component';
        }
      }
    });
    this.primengConfig.ripple = true;
  }
}
