import { Component } from '@angular/core';
import {DialogBuilder} from '@components/dialog-builder/dialog-builder.component';
import {RegisterForm} from '@components/register-form/register-form';

@Component({
  selector: 'auth-form-dialog',
  imports: [
    DialogBuilder,
    RegisterForm
  ],
  templateUrl: './auth-form-dialog.component.html',
  styleUrl: './auth-form-dialog.component.css'
})
export class AuthFormDialog {

}
