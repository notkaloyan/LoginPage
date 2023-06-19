import { Injectable } from '@angular/core';
import { IUser } from 'src/components/login/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;

  users: IUser[] = [
    {username: 'kaloyan', password: 'verySecret'},
    {username: 'misho', password: 'verySecretAsWell'}
  ]

  constructor() { }

  authenticate(user: IUser){
    if(this.users.some(u => u.username === user.username && u.password === user.password)){
      this.isLoggedIn = true;
      return true;
    } 
    return false;
  }

  logout(){
    this.isLoggedIn = false;
  }

}
