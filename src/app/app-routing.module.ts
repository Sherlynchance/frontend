import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthGuard } from './_guards';
// import { Role } from './_models';


const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home.module#HomeModule'
  },

   {
     path: 'admin',
     loadChildren: './admin/admin.module#AdminModule'
   },
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   }

//    { 
//     path: 'home', 
//     component: HomeComponent, 
//     canActivate: [AuthGuard], 
//     data: { roles: [Role.Admin] } 
// },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }