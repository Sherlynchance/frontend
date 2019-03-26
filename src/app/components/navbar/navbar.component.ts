import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser
      .subscribe(x => 
        this.currentUser = x);
  }

    

  logout() {
    
    window.alert("Successfully logged out");
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }


}
