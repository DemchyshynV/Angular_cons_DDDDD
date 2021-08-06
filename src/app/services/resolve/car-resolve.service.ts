import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CarService} from "../car.service";

@Injectable({
  providedIn: 'root'
})
export class CarResolveService implements Resolve<any> {

  constructor(private carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(route.params.id);
    return this.carService.getById(route.params.id)
  }
}
