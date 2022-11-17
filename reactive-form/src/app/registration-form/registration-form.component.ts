import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  title="Registration Form";
  registrationForm = new FormGroup({
    user: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl('')
  })

  registerUser(){
    console.warn(this.registrationForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
