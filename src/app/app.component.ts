import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'EducaciónIT';
  constructor(private route: ActivatedRoute) {
    localStorage.setItem('isProfe', 'true');

  }
}
