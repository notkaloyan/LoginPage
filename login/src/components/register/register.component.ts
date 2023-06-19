import { Component } from '@angular/core';
import { IUser } from '../login/types';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor (public authService: AuthService, private router: Router,
    private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      username: ['' , Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    const firstName = this.form.get('firstName')?.value;
    const lastName = this.form.get('lastName')?.value;
    const email = this.form.get('email')?.value;

    const user: IUser = {
      username,
      password
    }

    if(this.authService.authenticate(user)) console.log('Success');
    else console.log('Try again');
  }

}
