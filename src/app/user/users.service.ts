import { Injectable } from '@angular/core';
import NURSES from '../../assets/data/nurses.json';
import { filter, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  static url: String = 'http://localhost:8000/';
  static headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private conexHttp: HttpClient) {}

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
    if (name == '') return this.getAllUsers(false);
    let nurses = this.getAllUsers(false);
    return nurses.filter(
      (nurse) => nurse.name.trim().toLowerCase() == name.trim().toLowerCase()
    );
  }

  login(email: string, password: string): Observable<any> {
    let endpoint = UsersService.url + 'nurse/login';

    let formData: FormData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return this.conexHttp.post(endpoint, formData);
  }
  getUserById(): Observable<any> {
    let endpoint =
      UsersService.url + 'nurse/' + localStorage.getItem('nurseID');
    return this.conexHttp.get(endpoint);
  }

  register(name: string, surname: string, email: string, password: string) {
    let nurses = this.getAllUsers(true);
    if (
      nurses.filter(
        (nurse) =>
          nurse.email.trim().toLowerCase() == email.trim().toLowerCase()
      ).length == 1
    ) {
      return false;
    } else {
      NURSES.push({
        name: name,
        surname: surname,
        email: email,
        password: password,
      });

      console.log(this.getAllUsers(true));

      return true;
    }
  }
}
