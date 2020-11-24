import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedUser: String
  constructor(private al: AlertifyService) { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedUser = localStorage.getItem('token') || "";
    return this.loggedUser
  }

  onLogout() {
    localStorage.removeItem('token');
    this.al.success("Tu sesión se ha cerrado correctamente");
  }

}
