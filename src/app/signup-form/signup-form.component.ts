import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]\\w{3,14}$')])
  });
  password() {
    return this.form.get('password');
  }
  get userName() {
    return this.form.get('userName');
  }
}
