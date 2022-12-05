import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfeModel } from '../models/profe.model';

@Injectable()
export class ProfesService {

  constructor() { }
  Add(request: ProfeModel): Observable<string> {
    console.log(request);
    return new Observable<string>();
  }
}
