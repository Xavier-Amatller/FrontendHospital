import { Injectable } from '@angular/core';
import NURSES from '../../assets/data/nurses.json';
import { filter, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UsersService {

  static url: String = "http://localhost:8000/nurse/";
  static headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(private conexHttp: HttpClient) { }



  getAllUsers(): Observable<any> {
    let endpoint = UsersService.url + "";

    return this.conexHttp.get(endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getUsersByName(name: string): Observable<any> {
    let endpoint = UsersService.url + "search_by_name";
    const params = new HttpParams().set('name', name);

    return this.conexHttp.get(endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: params,
    });
  }

  login(email: string, password: string): Observable<any> {
    let endpoint = UsersService.url + "login";

    let formData: FormData = new FormData();
    formData.append("email", email);
    formData.append("password", password);


    return this.conexHttp.post(endpoint, formData);
  }

  register(name: string, surname: string, email: string, password: string) {
    // let nurses = this.getAllUsers();
    // if (
    //   nurses.filter(
    //     (nurse) =>
    //       nurse.email.trim().toLowerCase() == email.trim().toLowerCase()
    //   ).length == 1
    // ) {
    //   return false;
    // } else {
    //   NURSES.push({
    //     "name": name,
    //     "surname": surname,
    //     "email": email,
    //     "password": password
    //   })

    //   console.log(this.getAllUsers());

    return true

  }
}
