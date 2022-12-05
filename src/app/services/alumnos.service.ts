import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from '../models/alumno.model';

@Injectable()
export class AlumnosService {

  constructor() { }

  Add(request: AlumnoModel): Observable<string> {
    console.log(request);
    return new Observable<string>();
  }
}
