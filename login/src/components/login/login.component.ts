import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { IUser } from './types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor (public authService: AuthService, private router: Router,
    private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      username: ['' , Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    if(!username && !password) return;

    const user: IUser = {
      username,
      password
    }

    if(this.authService.authenticate(user)){
      this.router.navigate(['home']);
    } 
    else this.form.setErrors({
      unauthenticated:true
    })
  }

  onRegisterClick(){
    this.router.navigate(['register']);
  }

}
