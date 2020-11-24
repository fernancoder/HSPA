import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUser} from "src/app/model/IUser";
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  user: IUser;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private us: UserService, private as: AlertifyService) { }

  ngOnInit() {    
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm =this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      cpassword: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.minLength(9)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    return fg.get("password")?.value === fg.get("cpassword")?.value ? null : 
    {notmatched: true};
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true
    if ( this.registrationForm.valid ) {
      //this.user = Object.assign(this.user, this.registrationForm.value);
      this.us.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.as.success("Enhorabuena, te has registrado correctamente");
    } else {
      this.as.error("Hay problemas con algunos campos");
    }
  }

  userData(): IUser {
    return this.user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    }
  }

  // ------------------------------------
  // Getter methods for all corm controls
  // ------------------------------------

  get name() {
    return this.registrationForm.get("name") as FormControl
  }

  get email() {
    return this.registrationForm.get("email") as FormControl
  }

  get password() {
    return this.registrationForm.get("password") as FormControl
  }

  get cpassword() {
    return this.registrationForm.get("cpassword") as FormControl
  }

  get mobile() {
    return this.registrationForm.get("mobile") as FormControl
  }

  // ------------------------------------
}
