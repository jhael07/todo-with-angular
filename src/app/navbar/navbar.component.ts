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
    if (this.account) {
      user = JSON.parse(this.account);

      return user.username;
    }

    return '';
  }
}
