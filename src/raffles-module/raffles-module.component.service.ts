import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Raffle } from 'src/models/Raffle';

@Injectable({
  providedIn: 'root',
})
export class RafflesService {
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  constructor(private _http: HttpClient) {}

  postLoadRaffle(form: FormData): Observable<Raffle> {
    const uri = environment.createAndGetUrl;
    return this._http.post<Raffle>(uri, form).pipe(map((data: any) => data));
  }

  updateRaffle(form: FormData, id: number): Observable<Raffle> {
    const uri = environment.createAndGetUrl + '/' + id + '?_method=PUT';
    return this._http.post<Raffle>(uri, form).pipe(map((data: any) => data));
  }

  deleteRaffle(id: number) {
    const uri = environment.createAndGetUrl + '/' + id;
    return this._http.delete(uri).pipe();
  }

  getRaffles(): Observable<Raffle[]> {
    const uri = environment.createAndGetUrl;
    return this._http.get<Raffle[]>(uri).pipe(map((data: any) => data.data));
  }
}
