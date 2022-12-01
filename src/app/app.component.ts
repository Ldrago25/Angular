import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rifas-app';
  /**
    @DefaultConstruct
  */
  constructor(private primengConfig: PrimeNGConfig){
  }
  /**
    @implements
  */
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
