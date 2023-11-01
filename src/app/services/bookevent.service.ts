
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class BookEvent {
  _id: number;
  name: string;
  pickup: string;
  hdrop: string;
  weight: string;
  phone: number;

}

@Injectable({
  providedIn: 'root'
})

export class BookeventService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createBookEvent(bookevent: BookEvent): Observable<any> {
    return this.httpClient.post<BookEvent>('http://localhost:5100/api/create-bookevent', bookevent, this.httpOptions)
      .pipe(
        catchError(this.handleError<BookEvent>('Error occured'))
      );
  }

  getBookEvent(id): Observable<BookEvent[]> {
    return this.httpClient.get<BookEvent[]>('http://localhost:5100/api/fetch-bookevent/' + id)
      .pipe(
        tap(_ => console.log(`BookEvent fetched: ${id}`)),
        catchError(this.handleError<BookEvent[]>(`Get bookevent id=${id}`))
      );
  }

  getBookEvents(): Observable<BookEvent[]> {
    return this.httpClient.get<BookEvent[]>('http://localhost:5100/api')
      .pipe(
        tap(_bookevent => console.log('BookEvent retrieved!')),
        catchError(this.handleError<BookEvent[]>('Get bookevent', []))
      );
  }

  updateBookEvent(id, bookevent: BookEvent): Observable<any> {
    return this.httpClient.put('http://localhost:5100/api/update-bookevent/' + id, bookevent, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookEvent updated: ${id}`)),
        catchError(this.handleError<BookEvent[]>('Update Doctor'))
      );
  }

  viewBookEvent(id, bookevent: BookEvent): Observable<any> {
    return this.httpClient.put('http://localhost:5100/api/view-bookevent/' + id, bookevent, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookEvent viewed: ${id}`)),
        catchError(this.handleError<BookEvent[]>('View Doctor'))
      );
  }

  deleteBookEvent(id): Observable<BookEvent[]> {
    return this.httpClient.delete<BookEvent[]>('http://localhost:5100/api/delete-bookevent/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookEvent deleted: ${id}`)),
        catchError(this.handleError<BookEvent[]>('Delete doctors'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
