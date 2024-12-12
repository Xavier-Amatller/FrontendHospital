import { Injectable } from '@angular/core';
import NURSES from '../../assets/data/nurses.json';
import { filter } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  getAllUsers(): Array<any> {
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
    let nurses = this.getAllUsers();
    console.log("serv")
    return nurses.filter((nurse) =>
      nurse.name.toLowerCase().includes(nurse.name.trim().toLowerCase())
    );
  }
}
