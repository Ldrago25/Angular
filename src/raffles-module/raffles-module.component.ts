import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { RafflesService } from './raffles-module.component.service';
import { Raffle } from 'src/models/Raffle';
import * as moment from 'moment';
import { MenuItem } from 'primeng/api';

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
  raffles: Raffle[] = [{}];
  files: File[] = [];
  formData: FormGroup = new FormGroup({});
  actions: MenuItem[];
  auxIDRaffles: number;
  send: boolean = false;
  edit: boolean = false;
  raffleEdit: Raffle = {};
  IDsImagesDeleted: number[] = [];
  emptyImages: boolean = false;

  constructor(
    private app: AppComponent,
    private _form: FormBuilder,
    private _serviceRaffles: RafflesService
  ) {}

  ngOnInit(): void {
    this.actions = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.clear();
          this.chargeEditForm();
        },
      },
      {
        label: 'Excluir',
        icon: 'pi pi-times',
        command: () => {
          this._deleteRaffle();
        },
      },
    ];

    this.app.className = 'component';

    this.getRaffles();
    this._initForm();
    this.raffles = [];
  }

  chargeEditForm() {
    this.edit = true;

    for (let i = 0; i < this.raffles.length; i++) {
      if (this.auxIDRaffles == this.raffles[i].id) {
        this.raffleEdit = this.raffles[i];
      }
    }

    console.log(this.raffleEdit);

    this._loadForm();
  }

  changeID(id: number) {
    this.auxIDRaffles = id;
    console.log(this.auxIDRaffles);
  }

  date(value: string) {
    let date = new Date(value);
    moment.locale('es');

    return moment(date).format('DD-MM-YYYY');
  }
  fileOnChange(event: any) {
    this.files = event.currentFiles;

    if(this.edit){
      if(this.files.length > 0) {
        this.emptyImages = false;
      }
    }
  }

  emptyFiles(){
    if(this.edit){
      if(this.IDsImagesDeleted.length == this.raffleEdit.images.length && this.files.length == 1) {
        this.emptyImages = true;
      }
    }
  }

  sendData() {
    const formData: any = new FormData();

    if (this.formData.valid && this.files.length > 0) {
      this.send = true;
      formData.append('name', this.formData.controls['name'].value);
      formData.append('price', this.formData.controls['price'].value);
      formData.append(
        'numTicket',
        this.formData.controls['numberTickets'].value
      );
      formData.append('dateGame', this.formData.controls['date'].value);
      formData.append(
        'description',
        this.formData.controls['description'].value
      );
      this.files.forEach((file) => {
        formData.append('image[]', file);
      });

      this._serviceRaffles.postLoadRaffle(formData).subscribe((resp) => {
        if (resp) {
          this.raffles.push(resp);
          this.send = false;
          console.log(resp);
        }
      });

      this._initForm();
      this.files = [];
    }
  }

  updateData() {
    const formData: any = new FormData();

    if (this.formData.valid) {
      this.send = true;
      formData.append('name', this.formData.controls['name'].value);
      formData.append('price', this.formData.controls['price'].value);
      formData.append(
        'numTicket',
        this.formData.controls['numberTickets'].value
      );
      formData.append('dateGame', this.formData.controls['date'].value);
      formData.append(
        'description',
        this.formData.controls['description'].value
      );

      if (this.files.length > 0) {
        this.files.forEach((file) => {
          formData.append('image[]', file);
        });
      }

      if (this.IDsImagesDeleted.length > 0) {
        this.IDsImagesDeleted.forEach((id) => {
          formData.append('deleteIds[]', id);
        });
      } else {
        formData.append('deleteIds[]', []);
      }

      this._serviceRaffles
        .updateRaffle(formData, this.auxIDRaffles)
        .subscribe((resp) => {
          if (resp) {
            for (let i = 0; i < this.raffles.length; i++) {
              if (this.raffles[i].id == this.auxIDRaffles) {
                this.raffles[i] = resp;
              }
            }
            this.send = false;
            console.log(resp);
          }
        });

      console.log('updated');

      this.edit = false;
      this.IDsImagesDeleted = [];

      this._initForm();
      this.files = [];
    }
  }

  getRaffles() {
    this._serviceRaffles.getRaffles().subscribe((resp) => {
      if (resp) {
        this.raffles = resp;
      }

      console.log(this.raffles);
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

  private _loadForm() {
    this.formData = this._form.group({
      name: [this.raffleEdit.name, [Validators.compose([Validators.required])]],
      price: [
        this.raffleEdit.price,
        [Validators.compose([Validators.required])],
      ],
      numberTickets: [
        this.raffleEdit.numTicket,
        [Validators.compose([Validators.required])],
      ],
      date: [
        new Date(this.raffleEdit.dateGame),
        [Validators.compose([Validators.required])],
      ],
      description: [
        this.raffleEdit.description,
        [Validators.compose([Validators.required])],
      ],
    });
  }

  private _deleteRaffle() {
    this._serviceRaffles.deleteRaffle(this.auxIDRaffles).subscribe((resp) => {
      this.raffles = this.raffles.filter(
        (raff) => raff.id != this.auxIDRaffles
      );
    });
  }

  select(ID: number) {
    this.IDsImagesDeleted.push(ID);

    if(this.IDsImagesDeleted.length == this.raffleEdit.images.length && this.files.length == 0) {
      this.emptyImages = true;
    }

    console.log(this.IDsImagesDeleted);
  }

  noSelect(ID: number) {
    this.IDsImagesDeleted = this.IDsImagesDeleted.filter((id) => id != ID);
    this.emptyImages = false;
    console.log(this.IDsImagesDeleted);
  }

  findSelect(ID: number) {
    for (let i = 0; i < this.IDsImagesDeleted.length; i++) {
      if (ID == this.IDsImagesDeleted[i]) {
        return true;
      }
    }
    return false;
  }

  clean() {
    this.IDsImagesDeleted = [];
    this._initForm();
    this.edit = false;
    this.clear();
  }

  clear() {
    this.send = true;

    setTimeout(() => {
      this.send = false;
    }, 2000);
  }
}
