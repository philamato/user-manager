import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';

import { Credentials } from '../models';
import { AuthPageActions } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private store: Store, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  ngOnInit(): void {}

  getPasswordErrorMessage(): string {
    return 'Please enter a Password';
  }

  getEmailErrorMessage(): string {
    if (this.form.controls['email'].hasError('required')) {
      return 'Please enter an email address';
    }

    return this.form.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const credentials: Credentials = this.form.value;

    this.store.dispatch(new AuthPageActions.Login(credentials));
  }
}
