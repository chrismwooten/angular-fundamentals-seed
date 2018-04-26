import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <button (click)="goBack()">&lsaquo; Go Back</button>
    <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
  </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((data: Params) => this.passengerService.getPassenger(data.id))
      )
      .subscribe((passenger: Passenger) => (this.passenger = passenger));
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerService
      .updatePassenger(passenger)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, data);
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
