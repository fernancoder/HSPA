import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private as: AuthService,
              private al: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(logingForm: NgForm) {
    console.log(logingForm.value);
    const token = this.as.authUser(logingForm.value);
    if ( token ) {
      localStorage.setItem('token', token.name);
      this.al.success("Idenitificación correcta");
      this.router.navigate(['/']);
    } else {
      this.al.error("Usuario o contraseña incorrectos");
    }
  }

  loggedin() {
    return localStorage.getItem('token');
  }
}
