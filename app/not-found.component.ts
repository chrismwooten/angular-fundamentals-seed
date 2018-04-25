import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `<div>Your page was not found!  Click <a routerLink="/">here</a> to return to home.</div>`
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
