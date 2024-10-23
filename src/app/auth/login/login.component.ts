import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  myForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onsubmit(){}
}
