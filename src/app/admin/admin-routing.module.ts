import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },

  {
    path:'users',
    component: UsersComponent
  },

  {
    path:'hotels',
    component: HotelsComponent
  },

  {
    path:'reviews',
    component:ReviewsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
