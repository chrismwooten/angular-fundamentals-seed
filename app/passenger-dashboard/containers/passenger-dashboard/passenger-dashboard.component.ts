import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>{{i}}: {{passenger.fullName}}
          <div class="date">
            Check in date: {{ passenger.checkInDate | date:'MM/dd/yyyy' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent {
  passengers: Passenger[];
  constructor() {
    this.passengers = [
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
}
