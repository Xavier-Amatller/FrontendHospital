import { Injectable } from '@angular/core';
import  NURSES from "../../assets/data/nurses.json"
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

  filteredNurses: Array<any> = [];
  getAllUsers(): Array<any> {


    NURSES.forEach((nurse) => {
      this.filteredNurses.push({
        name: nurse.name,
        surname: nurse.surname,
        email:nurse.email
      });
    });

    return this.filteredNurses;
  }
}
