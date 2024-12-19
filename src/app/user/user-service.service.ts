import { Injectable } from '@angular/core';
import NURSES from '../../assets/data/nurses.json';
import { filter } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  getAllUsers(password: boolean): Array<any> {
    if (password) {
      return NURSES;
    }

    let filteredNurses: Array<any> = [];
    NURSES.forEach((nurse) => {
      filteredNurses.push({
        name: nurse.name,
        surname: nurse.surname,
        email: nurse.email,
      });
    });
    return filteredNurses;
  }

  getUsersByName(name: string) {
    let nurses = this.getAllUsers(false);
    return nurses.filter(
      (nurse) => nurse.name.trim().toLowerCase() == name.trim().toLowerCase()
    );
  }

  login(email: string, password: string) {
    let nurses = this.getAllUsers(true);
    return (
      nurses.filter(
        (nurse) =>
          nurse.email.trim().toLowerCase() == email.trim().toLowerCase() &&
          nurse.password.trim() == password.trim()
      ).length == 1
    );
  }

  register(name: string, surname: string, email: string, password: string) {
    let nurses = this.getAllUsers(true);
    if(
      nurses.filter(
        (nurse) =>
          nurse.email.trim().toLowerCase() == email.trim().toLowerCase()
      ).length == 1
    ){
      return false;
    }else{
      NURSES.push({
        "name": name,
        "surname": surname,
        "email": email,
        "password": password
      })

      console.log(this.getAllUsers(true));
      
      return true
    }
  }
}
