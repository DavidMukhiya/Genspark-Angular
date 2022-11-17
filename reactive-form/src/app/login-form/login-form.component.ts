import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
loginUser() {
  console.warn(this.loginForm.value);
}
  title ='Login Form';
  loginForm = new FormGroup({
    user: new FormControl('anil'),
    password: new FormControl('123')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
