import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTemplateComponent } from './home.template';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';


const routes: Routes = [
    {
      path: '',
      component: HomeTemplateComponent,
      children: [
    {
      path: 'home', 
      component: HomeComponent
    },
    {
      path: 'contact', 
      component: ContactComponent
    },

    {
      path: 'login', 
      component: LoginComponent
    },

    {
      path: 'register', 
      component: RegisterComponent
    },
    
    {
      path:'hotel-list',
      component: HotelListComponent
    },

    {
      path:'hotel-details',
      component: HotelDetailsComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
