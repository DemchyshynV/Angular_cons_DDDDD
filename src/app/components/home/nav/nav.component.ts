import {Component, Input, OnInit} from '@angular/core';
import {ILinks} from "../../../interfaces";
import {Router} from "@angular/router";
import {CarService, DataTransferService} from "../../../services";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  links: ILinks

  constructor(private router: Router, private carService: CarService, private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  next() {
    console.log(this.links.next);
    this.carService.getAll(this.links.next).subscribe(value => {
        this.links = value.links
        this.dataTransferService.setData(value.data)
      }
    )
  }

  prev() {

  }
}
