import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class BookTrips {
  _id: number;
  name: string;
  wheel: number;
  capacity: string;
  price: number;
  imgurl: string;

}

@Injectable({
  providedIn: 'root'
})

export class BooktripsService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createBookTrips(booktrips: BookTrips): Observable<any> {
    return this.httpClient.post<BookTrips>('http://localhost:5200/api/create-booktrips', booktrips, this.httpOptions)
      .pipe(
        catchError(this.handleError<BookTrips>('Error occured'))
      );
  }

  getBookTrips(id): Observable<BookTrips[]> {
    return this.httpClient.get<BookTrips[]>('http://localhost:5200/api/fetch-booktrips/' + id)
      .pipe(
        tap(_ => console.log(`BookTrips fetched: ${id}`)),
        catchError(this.handleError<BookTrips[]>(`Get booktrips id=${id}`))
      );
  }

  getBookTripss(): Observable<BookTrips[]> {
    return this.httpClient.get<BookTrips[]>('http://localhost:5200/api')
      .pipe(
        tap(_booktrips => console.log('BookTrips retrieved!')),
        catchError(this.handleError<BookTrips[]>('Get booktrips', []))
      );
  }

  updateBookTrips(id, booktrips: BookTrips): Observable<any> {
    return this.httpClient.put('http://localhost:5200/api/update-booktrips/' + id, booktrips, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips updated: ${id}`)),
        catchError(this.handleError<BookTrips[]>('Update Doctor'))
      );
  }

  viewBookTrips(id, booktrips: BookTrips): Observable<any> {
    return this.httpClient.put('http://localhost:5200/api/view-booktrips/' + id, booktrips, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips viewed: ${id}`)),
        catchError(this.handleError<BookTrips[]>('View Trips'))
      );
  }

  deleteBookTrips(id): Observable<BookTrips[]> {
    return this.httpClient.delete<BookTrips[]>('http://localhost:5200/api/delete-booktrips/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips deleted: ${id}`)),
        catchError(this.handleError<BookTrips[]>('Delete trips'))
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
