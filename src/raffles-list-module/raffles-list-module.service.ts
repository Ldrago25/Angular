import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Raffle } from 'src/models/Raffle';

@Injectable({
  providedIn: 'root',
})
export class RafflesListService {
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  constructor(private _http: HttpClient) {}

  getRaffles(): Observable<Raffle[]> {
    const uri = environment.createAndGetUrl;
    return this._http.get<Raffle[]>(uri).pipe(map((data: any) => data.data));
  }
}
