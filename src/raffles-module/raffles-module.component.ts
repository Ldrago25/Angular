import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { RafflesService } from './raffles-module.component.service';
import { Raffle } from 'src/models/Raffle';





@Component({
  selector: 'app-raffles',
  templateUrl: './raffles-module.component.html',
  styleUrls: ['./raffles-module.component.css'],
  styles: [
    `
      :host ::ng-deep table {
        width: 100%;
      }
    `,
  ],
})
export class RafflesComponent implements OnInit {
  raffles: Raffle [] = [{}];

  files:File[]=[];

  formData: FormGroup = new FormGroup({});

  constructor(private app: AppComponent, private _form: FormBuilder, private _serviceRaffles:RafflesService) {}

  ngOnInit(): void {
    this.app.className = 'component';

    this.getRaffles();
    this._initForm();
    this.raffles = [

    ];
  }

  fileOnChange(event: any) {
    this.files = event.currentFiles;
  }

  sendData() {
    const formData: any = new FormData();

    formData.append('name', this.formData.controls['name'].value);
    formData.append('price', this.formData.controls['price'].value);
    formData.append('numTicket', this.formData.controls['numberTickets'].value);
    formData.append('dateGame', this.formData.controls['date'].value);
    formData.append('description', this.formData.controls['description'].value);
    this.files.forEach((file) => {  formData.append('image[]', file); });

    this._serviceRaffles.postLoadRaffle(formData).subscribe((resp)=>{


      console.log(resp);

    });


  }

  getRaffles(){
    this._serviceRaffles.getRaffles().subscribe((resp)=> {
      
      this.raffles = resp;

      console.log(this.raffles);
      

    })
  }

  private _initForm() {
    this.formData = this._form.group({
      name: ['', [Validators.compose([Validators.required])]],
      price: ['1', [Validators.compose([Validators.required])]],
      numberTickets: ['1', [Validators.compose([Validators.required])]],
      date: ['', [Validators.compose([Validators.required])]],
      description: ['', [Validators.compose([Validators.required])]],
    });
  }
}
