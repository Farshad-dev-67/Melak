import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {HeaderModule} from '../../shared/reusable-module/header/header.module';
import {SidebarModule} from '../../shared/reusable-module/sidebar/sidebar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidebarModule
  ]
})
export class DashboardModule {
}
