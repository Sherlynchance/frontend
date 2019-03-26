import { Component, OnInit } from '@angular/core';

import { UserService } from '../../_services'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .subscribe(users => {
        this.users = users;
      })
  }

  deleteUser(id){
    this.userService.deleteUser(id)
      .subscribe((users) => {
        console.log("Hotel deleted, ", users);
      })
  }

}
