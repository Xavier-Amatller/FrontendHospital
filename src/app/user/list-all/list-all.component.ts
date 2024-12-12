import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-list-all',
  standalone: false,

  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css',
  providers: [UserServiceService],
})
export class ListAllComponent implements OnInit {
  users: any = [];
  constructor(private userService: UserServiceService) {}
  ngOnInit(): void {
    this.users = this.userService.getAllUsers()
  }
}
