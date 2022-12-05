import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { StatusService } from 'src/app/services/status.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {

    list2: AlumnoModel[] = [];
    constructor(private storage: StorageService) {}
    ngOnInit(): void {
      this.list2 = this.storage.getAll();
    }
}

interface User {
  id: number;
  name: string;
  lastName: string;
}
