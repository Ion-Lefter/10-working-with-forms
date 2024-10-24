import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  mySignupForm = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.email, 
        Validators.required
      ],

    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    firstName: new FormControl('', {validators: [Validators.required]}),
    lastName: new FormControl('', {validators: [Validators.required]}),
    street: new FormControl('', {validators: [Validators.required]}),
    number: new FormControl('', {validators: [Validators.required]}),
    postalCode: new FormControl('', {validators: [Validators.required]}),
    city: new FormControl('', {validators: [Validators.required]}),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('employee', 
      {validators: [Validators.required]}),
    agree: new FormControl(false, {validators: [Validators.required]})

  });

  onSubmit(){
    const enteredEmail = this.mySignupForm.value.email;
    const enteredPassword = this.mySignupForm.value.password;
    console.log(enteredEmail, enteredPassword);
  }

  onReset(){
    this.mySignupForm.reset();
    const enteredEmail = this.mySignupForm.value.email;
    const enteredPassword = this.mySignupForm.value.password;
    console.log(enteredEmail, enteredPassword);
    console.log()
  }
}
