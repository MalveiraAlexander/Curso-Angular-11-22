import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  test = 'Algo';
  ngOnInit() {
    setTimeout(() => {
      this.test = 'Prueba';
    }, 4000);
  }
}
