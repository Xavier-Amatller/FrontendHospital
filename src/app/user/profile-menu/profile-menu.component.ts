import { Component, OnInit, } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

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
  password: string = '';

  constructor(private router: Router, private userService: UsersService) { }
  ngOnInit() {
    this.userService.getUserById().subscribe(
      (data) => {
        this.name = data['name'];
        this.surname = data['surname'];
        console.log(data);

        this.email = data['email'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onEdit() {
    this.userService.editNurse(this.name, this.surname, this.email, this.password).subscribe(
      (data) => {
        if (data) {
          console.log(data + " Nurse edited");
        }
      },
      (error) => {
        console.error(error);
      }
    )
  }
  onDelete() {
    const nurseID: string | null = localStorage.getItem('nurseID');

    if (!nurseID) {
      throw new Error('No nurseID found in localStorage');
    }
    this.userService.deleteNurse(nurseID).subscribe(
      (data) => {
        if (data) {
          localStorage.setItem('isLogged', "false");
          console.log("Nurse deleted");
          this.router.navigate(['nurse/register']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
