import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        (view)="handleView($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService,
    private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.getPassengers();
  }

  getPassengers() {
    this.passengerService
      .getPassengers()
      .subscribe((data: Passenger[]) => (this.passengers = data));
  }

  handleEdit(event: Passenger) {
    this.passengerService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.map(x => {
        if (x.id === event.id) {
          x = Object.assign({}, x, data);
        }
        return x;
      });
    });
  }

  handleRemove(event: Passenger) {
    this.passengerService.removePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter(x => x.id !== event.id);
    });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
