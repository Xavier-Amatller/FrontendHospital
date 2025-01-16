import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') == 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    let status;
    let nurseID;
    this.userService.login(this.email, this.password).subscribe(
      (data) => {
      status = data['status'];
      if (status) {
        nurseID = data['id'];
        localStorage.setItem('name', this.email.replace('@gmail.com', ''));
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('nurseID', nurseID);
        this.router.navigate(['dashboard']);
      } else {
        alert('Credenciales incorrectas');
        localStorage.setItem('isLogged', 'false');
      }
    },
    (error) => {
      console.error(error);
    }
  
  );

    // if (this.userService.login(this.email, this.password)) {
    //   localStorage.setItem('name', this.email.replace('@gmail.com', ''));
    //   localStorage.setItem('isLogged', 'true');
    //   this.router.navigate(['dashboard']);
    // } else {
    //   alert('Credenciales incorrectas');
    //   localStorage.setItem('isLogged', 'false');
    // }
  }
}
