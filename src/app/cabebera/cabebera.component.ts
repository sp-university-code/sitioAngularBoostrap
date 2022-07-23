import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabebera',
  templateUrl: './cabebera.component.html',
  styleUrls: ['./cabebera.component.css']
})
export class CabeberaComponent implements OnInit {


  strAcerca:string = "Album fotográfico"
  strInfo:string = "A través de mis ojos"

  constructor() { }

  ngOnInit(): void {
  }

}
