import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ICar} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data = new BehaviorSubject<any>(null)

  constructor() {
  }

  getData(): Observable<any> {
    return this.data
  }

  setData(cars: ICar[]): void {
    this.data.next(cars)
  }
}
