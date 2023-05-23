import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  username = '';
  password = '';

  // * 👇 This function validate if the login credentials are fill out
  validation() {
    if (!this.username || !this.password) {
      Swal.fire('Error', 'The username or password is invalid', 'error');
      return;
    }
    // * 👇 If there are no errors, it triggers this function
    this.login();
  }

  login() {
    localStorage.setItem(
      'session',
      JSON.stringify({ username: this.username })
    );

    Swal.fire(
      ` ${this.username}, you have loggin sucessfully 😀!!`,
      'Now you are able to save your tasks in the browser.',
      'success'
    );

    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }
}
