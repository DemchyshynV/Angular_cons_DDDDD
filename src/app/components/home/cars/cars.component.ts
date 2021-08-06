import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ICar} from "../../../interfaces";
import {DataTransferService} from "../../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]

  constructor(private router: Router, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.dataTransferService.getData().subscribe(value => this.cars = value)
  }

}
