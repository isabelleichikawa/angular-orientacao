import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form: FormGroup;

  login: string;
  password: string;

  constructor() {
    this.form = new FormGroup({
      loginControl: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  logIn() {
    console.log(this.login);
    console.log(this.password);
  }

}
