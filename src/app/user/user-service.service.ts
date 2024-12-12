import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  filteredNurses: Array<any> = [];
  nurses: any = [];
  getAllUsers(): Array<any> {
    this.http
      .get('data/nurses.json', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe((response) => {
        this.nurses = response;
        console.log(this.nurses)
      });

    this.nurses.forEach((element) => {
      this.filteredNurses.push({
        name: element.name,
      });
    });

    return this.filteredNurses;
  }
}
