import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-list-all',
  standalone: false,

  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css',
  providers: [UsersService],
})
export class ListAllComponent implements OnInit {
  users: any = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.users = this.userService.getAllUsers(false)
  }
}
