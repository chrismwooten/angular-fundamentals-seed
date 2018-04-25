import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

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
        #fullName="ngModel"
        [ngModel]="detail?.fullName"
        required>
        <div *ngIf="fullName.touched && fullName.errors?.required" class="error">
          Passenger name is required.
        </div>
    </div>
    <div>
      Passenger ID:
      <input
        type="number"
        name="id"
        #id="ngModel"
        [ngModel]="detail?.id"
        required>
        <div *ngIf="id.touched && id.errors?.required" class="error">
          ID is required.
        </div>
    </div>
    <div>
      <label>
        <input type="checkbox"
               name="checkedIn"
               [ngModel]="detail?.checkedIn"
               (ngModelChange)="toggleCheckIn($event)">
        Yes
      </label>
    </div>

    <div *ngIf="form.value.checkedIn">
      Check in date:
      <input
        type="number"
        name="checkInDate"
        [ngModel]="detail?.checkInDate">
    </div>

    <div>
      Luggage:
      <select
        name="baggage"
        [ngModel]="detail?.baggage">
        <option *ngFor="let item of baggage"
          [value]="item.key"
          [selected]="item.key === detail?.baggage">
          {{item.value}}
        </option>
      </select>
    </div>
    <button type="submit" [disabled]="form.invalid">
      Update passenger
    </button>
  </form>
  `
})
export class PassengerFormComponent implements OnInit {
  @Input() detail: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];

  constructor() {}

  ngOnInit() {
    if (this.detail) this.detail = Object.assign({}, this.detail);
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); //ms
    }
  }
}
