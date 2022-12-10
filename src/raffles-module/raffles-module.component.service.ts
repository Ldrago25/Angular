import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RafflesService {

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  constructor(private _http: HttpClient) { }

  postLoadRaffle(form: FormData): Observable<any> {
    const uri = environment.createUrl;
    return this._http
        .post<any>(uri, form)
        .pipe(map((data:any) => data));
}

}
