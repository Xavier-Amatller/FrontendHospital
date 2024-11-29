import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  isLogged: boolean = false;
  email: string = '';
  password: string = '';

  ngOnInit(): void {
      
  }
  constructor(private router: Router) {}

  login() {
    if (this.email === 'jon@gmail.com' && this.password === '1234') {
      this.isLogged = true;
      this.router.navigate(["dashboard"]); 
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
