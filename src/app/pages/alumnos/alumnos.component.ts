import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {

    list2: User[] = [
      {
        id: 1,
        name: 'Hola 1',
        lastName: 'Prueba'
      },
      {
        id: 2,
        name: 'Hola 2',
        lastName: 'Test'
      },
      {
        id: 3,
        name: 'Hola 3',
        lastName: 'Test Prueba'
      }
    ];
    constructor() {
      console.log('Hola');
    }
}

interface User {
  id: number;
  name: string;
  lastName: string;
}
