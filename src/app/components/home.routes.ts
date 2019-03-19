import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home.template';

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
        path: 'login', 
        component: LoginComponent
      },
 
      {
        path: 'register', 
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
