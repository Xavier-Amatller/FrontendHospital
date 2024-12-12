import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-search-by-name',
  standalone: false,

  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {

  
  NURSES_TEST: any[] = [];
  name: string = '';
  resultNursesList: any[] = [];
  isNurseFound: boolean = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    // this.userService.getAllUsers().subscribe({
    //   next: (response) => {
    //     this.NURSES_TEST = response;
    //     this.resultNursesList = response;
    //   },
    //   error: function (error){
    //     console.log(error);
    //     console.log(Response)
    //   }
    // });
  }

  handleOnSearch(event: Event) {
    console.log(this.NURSES_TEST)
    event.preventDefault();
    this.resultNursesList = this.NURSES_TEST.filter((nurse) =>
      nurse.name.toLowerCase().includes(this.name.trim().toLowerCase())
    );
    this.isNurseFound = this.resultNursesList.length !== 0;
  }
}
