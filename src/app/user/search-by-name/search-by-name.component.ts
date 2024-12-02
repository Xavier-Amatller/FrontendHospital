import { Component } from '@angular/core';
import NURSES_TEST from '../../nurses-show-all.json';
@Component({
  selector: 'app-search-by-name',
  standalone: false,

  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  name: string = '';
  resultNursesList: any[] = NURSES_TEST;

  isNurseFound: boolean = this.resultNursesList.length !== 0;
  handleOnSearch(event: Event) {
    event.preventDefault();
    this.resultNursesList = NURSES_TEST.filter((nurse) =>
      nurse.name.toLowerCase().includes(this.name.trim().toLowerCase())
    );

    this.isNurseFound = this.resultNursesList.length !== 0;
  }
}
