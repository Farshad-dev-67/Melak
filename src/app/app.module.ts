import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptor/auth-interceptor.service';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SidebarModule} from './shared/reusable-module/sidebar/sidebar.module';
import {HeaderModule} from './shared/reusable-module/header/header.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
