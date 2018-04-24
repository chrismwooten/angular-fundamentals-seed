import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

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
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.passengers = this.getPassengers();
  }

  getPassengers() : Passenger[] {
    return [
      {
        id: 1,
        fullName: 'Chris',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Titus', age: 3 }, { name: 'Eva', age: 2 }]
      },
      {
        id: 2,
        fullName: 'Jill',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 3,
        fullName: 'Bob',
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 4,
        fullName: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      },
      {
        id: 5,
        fullName: 'Jennifer',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: null
      }
    ];
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map(x => {
      if (x.id == event.id) {
        x = Object.assign({}, x, event);
      }
      return x;
    })
    console.log(this.passengers);
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter(x => x.id !== event.id);
    console.log(event);
  }
}
