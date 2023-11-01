import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Driver {
  _id: number;
  name: string;
 
  imgurl: string;

}

@Injectable({
  providedIn: 'root'
})

export class DriverService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createDriver(driver: Driver): Observable<any> {
    return this.httpClient.post<Driver>('http://localhost:5300/api/create-driver', driver, this.httpOptions)
      .pipe(
        catchError(this.handleError<Driver>('Error occured'))
      );
  }

  getDriver(id): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>('http://localhost:5300/api/fetch-driver/' + id)
      .pipe(
        tap(_ => console.log(`Driver fetched: ${id}`)),
        catchError(this.handleError<Driver[]>(`Get driver id=${id}`))
      );
  }

  getDrivers(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>('http://localhost:5300/api')
      .pipe(
        tap(_driver => console.log('Driver retrieved!')),
        catchError(this.handleError<Driver[]>('Get driver', []))
      );
  }

  updateDriver(id, driver: Driver): Observable<any> {
    return this.httpClient.put('http://localhost:5200/api/update-driver/' + id, driver, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips updated: ${id}`)),
        catchError(this.handleError<Driver[]>('Update Doctor'))
      );
  }

  viewDriver(id, driver: Driver): Observable<any> {
    return this.httpClient.put('http://localhost:5200/api/view-driver/' + id, driver, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips viewed: ${id}`)),
        catchError(this.handleError<Driver[]>('View Trips'))
      );
  }

  deleteDriver(id): Observable<Driver[]> {
    return this.httpClient.delete<Driver[]>('http://localhost:5200/api/delete-driver/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`BookTrips deleted: ${id}`)),
        catchError(this.handleError<Driver[]>('Delete trips'))
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
