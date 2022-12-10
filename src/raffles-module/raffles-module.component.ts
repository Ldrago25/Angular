import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { RafflesService } from './raffles-module.component.service';

interface Raffle {
  name: string;
  price: number;
  tickets: number;
  date: string;
}

interface upload {
  images: File[];
}

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
  raffles: Raffle[] = [];
  uploadedFiles: upload = { images: [] };
  files:File[]=[];

  formData: FormGroup = new FormGroup({});

  constructor(private app: AppComponent, private _form: FormBuilder, private _serviceRaffles:RafflesService) {}

  ngOnInit(): void {
    this.app.className = 'component';

    this._initForm();
    this.raffles = [
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
