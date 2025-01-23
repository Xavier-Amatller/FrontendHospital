import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-search-by-name',
  standalone: false,

  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  name: string = '';
  isNurseFound: boolean = true;


  constructor(private userService: UsersService) { }
  nurses: any = [];
  isLoading: boolean = true;
  pfp = 'https://www.w3schools.com/howto/img_avatar.png';

  ngOnInit(): void {
    console.log("antes peticion");
    
    this.userService.getAllUsers().subscribe({
      next: (nurses) => {
        this.nurses = nurses;
        this.isLoading = false;

      },
      error: (err) => {
        console.error('Error al obtener las enfermeras:', err);
        this.isLoading = false;

      },
    });
  }

  handleOnSearch() {
    this.isLoading = true;
    this.userService.getUsersByName(this.name).subscribe({
      next: (nurses) => {
        this.nurses = nurses;
        console.log('Nurses:', nurses);
        this.isLoading = false;
        this.isNurseFound = true; // Se encontró al usuario
      },
      error: (err) => {
        console.error('Error:', err);
        this.isLoading = false;
        this.isNurseFound = false; // Usuario no encontrado
      },
    });
  }
  
}
