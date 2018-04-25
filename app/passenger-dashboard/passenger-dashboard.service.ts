import { Injectable } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }
  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: any) => Observable.throw(err.json()))
      );
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: any) => Observable.throw(err.json()))
      );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: any) => Observable.throw(err.json()))
      );
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: any) => Observable.throw(err.json()))
      );
  }
}
