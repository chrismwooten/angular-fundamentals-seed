import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
  <form #form="ngForm" novalidate>
    {{ detail | json }}
    <div>
      Passenger name:
      <input
        type="text"
        name="fullName"
        [ngModel]="detail?.fullName">
    </div>
    <div>
      Passenger ID:
      <input
        type="number"
        name="id"
        [ngModel]="detail?.id">
    </div>
    {{ form.value | json }}
  </form>
  `
})
export class PassengerFormComponent implements OnInit {
  @Input() detail: Passenger;
  constructor() {}

  ngOnInit() {
    if (this.detail) this.detail = Object.assign({}, this.detail);
  }
}
