import { Component, OnInit } from '@angular/core';
import { BookeventService } from './../services/bookevent.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})

export class TripsPage implements OnInit {

  BookEvent: any = [];

  constructor( private bookeventService: BookeventService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.bookeventService.getBookEvents().subscribe((response) => {
      this.BookEvent = response;
    });
  }

  removeBookEvent(bookevent, i) {
    if (window.confirm('Are you sure')) {
      this.bookeventService.deleteBookEvent(bookevent._id)
      .subscribe(() => {
          this.BookEvent.splice(i, 1);
          console.log('Doctors deleted!');
        }
      );
    }
  }

}
