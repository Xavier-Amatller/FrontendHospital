import { Component } from '@angular/core';
@Component({
  selector: 'app-search-by-name',
  standalone: false,

  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css',
})
export class SearchByNameComponent {
  name: string = '';
  handleOnSearch(event: Event) {
    event.preventDefault();
    console.log(this.name);
  }
}
