import {Injectable, Optional} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar, ICarFull} from "../interfaces";
import {urls} from "../contstants";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(url: string | null = null): Observable<ICarFull> {
    console.log(url);
    return this.httpClient.get<ICarFull>(url || urls.cars, {
    })
  }

  getById(id: number): Observable<ICar> {
    return this.httpClient.get<ICar>(`${urls.cars}/${id}`)
  }
}
