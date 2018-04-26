import { Component } from '@angular/core';

interface Nav {
  name: string;
  link: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a *ngFor="let item of nav"
         [routerLink]="item.link"
         routerLinkActive="active"
         [routerLinkActiveOptions]="{exact: item.exact}">
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      name: 'Home',
      link: '/',
      exact: true
    },
    {
      name: 'Passengers',
      link: '/passengers',
      exact: true
    },
    {
      name: '404',
      link: '/oops',
      exact: false
    }
  ];
}
