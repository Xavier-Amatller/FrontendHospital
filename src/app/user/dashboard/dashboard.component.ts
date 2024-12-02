import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  nurseName = localStorage.getItem("name")
  constructor(private router: Router) {} 
  ngOnInit(): void {
      if(localStorage.getItem("isLogged") == "false"){
        this.router.navigate(["nurse/login"])
      }
   }
  
}
