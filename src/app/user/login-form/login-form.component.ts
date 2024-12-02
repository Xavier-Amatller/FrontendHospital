import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: false,

  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
      if(localStorage.getItem("isLogged") == "true"){
        this.router.navigate(["dashboard"])
      }
  }
  

  login() {
    if (this.email === 'jon@gmail.com' && this.password === '1234') {
      localStorage.setItem("name", this.email.replace("@gmail.com",""))
      localStorage.setItem("isLogged", "true")
      this.router.navigate(["dashboard"]);
    } else {
      alert('Credenciales incorrectas');
      localStorage.setItem("isLogged", "false")
    }
  }
}
