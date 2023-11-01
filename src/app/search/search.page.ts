import { Component, OnInit } from '@angular/core';
import { BookeventService } from './../services/bookevent.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage  implements OnInit{

  filterTerm!: string;
  BookEvent: any = [];

  constructor( private bookeventService: BookeventService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.bookeventService.getBookEvents().subscribe((response) => {
      this.BookEvent = response;
    });
  }


}


