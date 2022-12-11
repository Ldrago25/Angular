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
    const uri = environment.createUrl;
    return this._http.post<Raffle>(uri, form).pipe(map((data: any) => data));
  }

  getRaffles(): Observable<Raffle[]> {
    const uri = environment.getRafflesUrl;
    return this._http.get<Raffle[]>(uri).pipe(map((data: any) => data.data));
  }
}
