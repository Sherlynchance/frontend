import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersComponent } from './users/users.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { UserService } from '../_services';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from '../_services/hotel.service';
import { AlertService } from '../_services/alert.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent, 
   
    UsersComponent, 
    ReviewsComponent, 
    HotelsComponent, 
    NavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, HotelService, AlertService]
})
export class AdminModule { }
