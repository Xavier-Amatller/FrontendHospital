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
  nurses: any = [];
  ngOnInit(): void {
    this.nurses = this.userService.getAllUsers();
  }

  handleOnSearch(){
    this.nurses =  this.userService.getUsersByName(this.name); 
  }
}
