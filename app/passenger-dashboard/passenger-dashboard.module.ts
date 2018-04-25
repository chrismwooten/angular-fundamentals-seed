import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpModule } from '@angular/http';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ],
  exports: [
    PassengerViewerComponent
  ]
})
export class PassengerDashboardModule {}
