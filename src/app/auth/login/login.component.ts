import { NgFor } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor(){
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');
      if(savedForm){
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout( () => {
          this.form().controls['email'].setValue({
            email: savedEmail,
            password: ''
          });
        }, 1);
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => window.localStorage.setItem('saved-login-form', 
          JSON.stringify({email: value.email})
      ),
     });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm){
    if(formData.form.invalid){
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(formData);
    console.log(enteredEmail);
    console.log(enteredPassword);

    formData.form.reset();

  }
}
