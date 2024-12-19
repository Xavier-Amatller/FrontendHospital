import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register-form',
  standalone: false,

  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router,private userService: UserServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLogged") == "true") {
      this.router.navigate(["dashboard"])
    }
  }


  register() {
    if (this.validate()) {
      //HACER PETICION AL SERVICIO PARA INSERTAR UN NUEVO USUARIO (SIMULADO)
      if(this.userService.register(this.name, this.surname, this.email, this.password)){
        this.router.navigate(["nurse/login"]);
      }
    }
  }


  validate(): boolean {
    if (!this.name || this.name.trim().length < 2) {
      alert('Credenciales incorrectas: Name at least 2 letters');
      return false;
    }

    // Validar apellidos (no vacío, mínimo 2 caracteres)
    if (!this.surname || this.surname.trim().length < 2) {
      alert("Credenciales incorrectas: Surname at least 2 letters")
      return false;
    }

    // Validar email (formato válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      alert("Credenciales incorrectas: Email not valid");
      return false;
    }

    // Validar password (mínimo 8 caracteres, al menos una letra y un número)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(this.password)) {
      alert("Credenciales incorrectas: Password at least 8 letters, a letter and a number");
      return false;
    }
    return true;
  }


}



