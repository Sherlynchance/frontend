import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class AdminGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;

    constructor(
        private auth: AuthenticationService,
        private router: Router
    ){}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isAdmin){
            return true;
        }
        this.router.navigate(['/admin']);
        return false;    
    
    }
}