import { Component, OnInit } from '@angular/core';
import { BooktripsService } from '../booktrips.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  countrycode:string="91";
  whatsappnumber:string="6383681954";
  url:string="https://wa.me/"+this.countrycode+this.
  whatsappnumber+"?text=hi";
  subjects;
  BookTrips: any = [];

  constructor( private booktripsService: BooktripsService ) { }

  ngOnInit() { }


  ionViewDidEnter() {
    this.booktripsService.getBookTripss().subscribe((response) => {
      this.BookTrips = response;
    });
  }}

