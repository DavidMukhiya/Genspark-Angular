import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  title="Registration Form";
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{3,20}$/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{3,20}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('',[Validators.required,Validators.min(23),Validators.max(55)]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*()-])[A-Za-z0-9!@#$-_%^&*()]{8,20}$/)])
  })

  registerUser(){
    console.warn(this.registrationForm.value)
    alert("Thank you for Registration.")
  }

  get firstName(){
    return this.registrationForm.get('firstName')
  }

  get lastName(){
    return this.registrationForm.get('lastName')
  }

  get email(){
    return this.registrationForm.get('email')
  }

  get age(){
    return this.registrationForm.get('age')
  }

  get password(){
    return this.registrationForm.get('password')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
