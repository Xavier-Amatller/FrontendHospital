import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all',
  standalone: false,

  templateUrl: './list-all.component.html',
  styleUrl: './list-all.component.css',
})
export class ListAllComponent implements OnInit{
  users: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers() {
    this.http.get('data/nurses.json').subscribe(
      (data: any) => {
        this.users = data; 
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }
}
