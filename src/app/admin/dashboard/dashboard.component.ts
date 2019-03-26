import { Component, OnInit } from '@angular/core';


import { first } from 'rxjs/operators';

import { User } from '../../_models';
import { UserService } from 'src/app/_services';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public users: any[];
  
  

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(users => {
        this.users = users;
      })

    // this.userService.getById(name)
    // .subscribe(users => {
    //   this.name = name;
    // });  
  }

}
