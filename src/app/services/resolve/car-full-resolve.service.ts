import {Injectable} from '@angular/core';
import {CarService} from "../car.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ICarFull} from "../../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarFullResolveService implements Resolve<ICarFull> {

  constructor(private carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICarFull> | Promise<ICarFull> | ICarFull {
    return this.carService.getAll()
  }
}
