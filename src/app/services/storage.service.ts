import { Injectable } from '@angular/core';
import { AlumnoModel } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  add(alumno: AlumnoModel) {
    let alumnos: AlumnoModel[] = [];
    if (JSON.parse(localStorage.getItem(`alumnos`))) {
      alumnos = JSON.parse(localStorage.getItem(`alumnos`));
    }
    alumnos.push(alumno);
    localStorage.setItem(`alumnos`, JSON.stringify(alumnos));
  }

  remove(id: string) {
    let alumnos: AlumnoModel[] = JSON.parse(localStorage.getItem(`alumnos`));
    let alumnosAux: AlumnoModel[] = alumnos.filter(x => x.id != id);
    localStorage.setItem(`alumnos`, JSON.stringify(alumnosAux));
  }

  get(id: string): AlumnoModel {
    let alumnos: AlumnoModel[] = JSON.parse(localStorage.getItem(`alumnos`));
    let alumno: AlumnoModel = alumnos.find(x => x.id == id);
    return alumno;
  }

  getAll(): AlumnoModel[] {
    let alumnos =  JSON.parse(localStorage.getItem(`alumnos`));
    return alumnos;
  }


}
