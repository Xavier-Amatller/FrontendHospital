import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('assets/data/nurses.json').subscribe(
      (data: any[]) => {
        this.NURSES_TEST = data;
        this.resultNursesList = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  handleOnSearch(event: Event) {
    event.preventDefault();
    this.resultNursesList = this.NURSES_TEST.filter((nurse) =>
      nurse.name.toLowerCase().includes(this.name.trim().toLowerCase())
    );
    this.isNurseFound = this.resultNursesList.length !== 0;
  }
}
