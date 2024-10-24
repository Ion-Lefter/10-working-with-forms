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
    })
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
