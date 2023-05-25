import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css'],
})
export class ParamsComponent {
  id?: number;
  private subscriber: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscriber = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }
}
