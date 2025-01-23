import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-profile-menu',
  standalone: false,

  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css',
})
export class ProfileMenuComponent implements OnInit {
  name: string = '';
  surname: string = '';
  email: string = '';

  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.userService.getUserById().subscribe(
      (data) => {
        console.log(data);
        
        this.name = data['name'];
        this.surname = data['surname'];
        this.email = data['email'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onEdit() {
    // Logic to edit profile
  }
  onDelete() {
    // Logic to edit profile
  }
}
