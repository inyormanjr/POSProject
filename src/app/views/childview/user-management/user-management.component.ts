import { Component, OnInit, ViewChild } from '@angular/core';
import { User, MockData } from 'src/app/models/user';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userList: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
