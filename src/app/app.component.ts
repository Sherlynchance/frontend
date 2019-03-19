import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Project';
  
}

// @Component({ selector: 'app', templateUrl: 'app.component.html' })
// export class AppComponent {
    // currentUser: User;

    // constructor(
    //     private router: Router,
    //     private authenticationService: AuthenticationService
    // ) {
    //     this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // }

    // get isAdmin() {
    //     return this.currentUser && this.currentUser.role === Role.Admin;
    // }

    // logout() {
    //     this.authenticationService.logout();
    //     this.router.navigate(['/login']);
    // }
// }
