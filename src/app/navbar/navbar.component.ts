import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  account = localStorage.getItem('session');

  logoutFn() {
    localStorage.removeItem('session');
    window.location.reload();
  }

  getUserName(): string {
    let user: { username: '' };
    // * 👇 Check if the account session is active
    if (this.account) {
      user = JSON.parse(this.account); // * 👈 Convert the json into js object
      return user.username; // * 👈 Return the username
    }
    return ''; // * If there is not account session it returns an empty string
  }
}
