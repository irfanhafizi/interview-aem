import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartDonutComponent } from './components/chart-donut/chart-donut.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartDonutComponent,
    ChartBarComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
