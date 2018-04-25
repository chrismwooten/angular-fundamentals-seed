import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  templateUrl: './passenger-form.component.html'
})
export class PassengerFormComponent implements OnInit {
  @Input() detail: Passenger;
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }
  ];

  constructor() {}

  ngOnInit() {
    if (this.detail) this.detail = Object.assign({}, this.detail);
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now(); //ms
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (!isValid) return;
    this.update.emit(passenger);
  }
}
