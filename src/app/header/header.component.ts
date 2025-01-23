import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }

  isLogged(): boolean {
    return localStorage.getItem('isLogged') == 'true' ? true : false;
  }

  closeSession() {
    localStorage.setItem('isLogged', 'false');
  }
}
