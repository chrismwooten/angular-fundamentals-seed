import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
  <div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    <div *ngIf="editing">
      <input #name
        type="text"
        [value]="detail.fullName"
        (input)="onNameChange(name.value)" />
    </div>
    <div *ngIf="!editing">
      {{detail.fullName}}
    </div>
    <div class="date">
      Check in date: {{ detail.checkInDate | date:'MM/dd/yyyy' }}
    </div>
    <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
    <button (click)="onRemove()">Remove</button>
    <button (click)="goToPassenger()">View</button>
  </div>
  `
})
export class PassengerDetailComponent implements OnChanges {
  @Input() detail: Passenger;
  editing: boolean = false;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove : EventEmitter<Passenger> = new EventEmitter();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter();

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log(changes);
  }

  onNameChange(name: string) {
    // console.log(name);
    this.detail.fullName = name;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }

}
