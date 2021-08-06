import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ICarFull} from "../../interfaces";
import {DataTransferService} from "../../services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carFull: ICarFull;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({cars}) => {
      this.carFull = cars
      this.dataTransferService.setData(this.carFull.data)
    })
  }

}
