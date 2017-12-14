import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  users: User[];

  constructor(private userService:UserService) {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit() {
  }

  setAsEmployed(user: User){
    this.userService.setWerkzaam(user);
    console.log("userTable")
  }
}
