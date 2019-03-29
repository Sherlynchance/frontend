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
import { RoomsComponent } from './rooms/rooms.component';
import { RoomService } from '../_services/room.service';
import { ReviewService } from '../_services/review.service';
import { RoomTypesComponent } from './room-types/room-types.component';
import { FacilitiesComponent } from './facilities/facilities.component';

@NgModule({
  declarations: [
    DashboardComponent, 
   
    UsersComponent, 
    ReviewsComponent, 
    HotelsComponent, 
    RoomsComponent, 
    RoomTypesComponent, 
    FacilitiesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, HotelService, RoomService, ReviewService, AlertService]
})
export class AdminModule { }
