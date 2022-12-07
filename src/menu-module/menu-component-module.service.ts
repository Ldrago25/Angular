import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  showMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  constructor(private _http: HttpClient) { }

  get showMenu$(): Observable<boolean> {
    return this.showMenu.asObservable();
  }

  set changeshowMenu(value: boolean) {
    this.showMenu.next(value);
  }
}
