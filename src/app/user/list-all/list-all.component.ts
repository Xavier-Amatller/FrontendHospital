import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-list-all',
  standalone: false,

  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css',
  providers: [UsersService],
})
export class ListAllComponent implements OnInit {
  users: any = [];
  isLoading: boolean = true;

  constructor(private userService: UsersService) { }
  ngOnInit(): void {

    console.log("¡¡¡¡¡¡¡¡¡¡LIST ALL IS IMPLEMENTED IN SEARCH BY NAME!!!!!!!!!!!");
    console.log("Contact with Xavier Amatller for more info");


    // this.loadUsers();
  }

  // loadUsers(){
  //   console.log("a");

  //   this.users = this.userService.getAllUsers().subscribe({
  //     next: (nurses) => {
  //       this.users = nurses; 
  //       console.log('Nurses:', nurses);
  //       this.isLoading = false; 
  //     },
  //     error: (err) => {
  //       console.error('Error al obtener las enfermeras:', err);
  //       this.isLoading = false; 
  //     },
  //   });
  // }
}
