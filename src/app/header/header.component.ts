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

  sesion() {
    if (localStorage.getItem('isLogged') == 'true') {
      localStorage.setItem('isLogged', 'false');
    }
  }
}
