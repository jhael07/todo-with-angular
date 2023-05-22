import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'review';

  ngOnInit() {
    if (!localStorage.getItem('session')) {
      Swal.fire(
        'Please Sign in',
        'To be able to save your tasks in your browser',
        'info'
      );
    }
  }
}
