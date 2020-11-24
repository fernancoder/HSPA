import { Injectable } from '@angular/core';
import { IUser} from "src/app/model/IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any) {
  let UserArray = [];
  if (localStorage.getItem('Users')) {
    UserArray = JSON.parse(localStorage.getItem('Users')!);
  }
  return UserArray.find((p: any) => p.name === user.name && p.password === user.password);
}

}

