import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomTypesComponent } from './room-types/room-types.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AdminGuard } from '../_guards/admin.guard';
import { AuthGuard } from '../_guards';
import { Role } from '../_models/role';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
    // canActivate: [AuthGuard],
    // data: {user_roles:[Role.Admin]}
  },

  {
    path:'users',
    component: UsersComponent,
    // canActivate:[AdminGuard]

  },

  {
    path:'hotels',
    component: HotelsComponent
  },

  {
    path:'reviews',
    component:ReviewsComponent
  },

  {
    path:'rooms',
    component: RoomsComponent
  },

  {
    path:'room-types',
    component: RoomTypesComponent
  },
  
  {
    path:'facilities',
    component: FacilitiesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
