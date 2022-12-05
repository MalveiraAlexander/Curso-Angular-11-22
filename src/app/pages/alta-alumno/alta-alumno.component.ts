import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ProfesService } from 'src/app/services/profes.service';
import { StorageService } from 'src/app/services/storage.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss'],
  providers: [
    AlumnosService
  ]
})
export class AltaAlumnoComponent implements OnInit{
  alumnoForm: FormGroup;

  constructor(private router: Router, private service: AlumnosService, private storage: StorageService) {}
  ngOnInit(): void {
    this.createForm();
  }


  agregar() {
    console.log(this.alumnoForm);
    let alumno: AlumnoModel = new AlumnoModel();
    alumno.apellido = this.alumnoForm.value.apellido;
    alumno.ciudad = this.alumnoForm.value.ciudad;
    alumno.provincia = this.alumnoForm.value.provincia;
    alumno.nombre = this.alumnoForm.value.nombre;
    alumno.id = uuidv4();
    this.storage.add(alumno);
    this.router.navigate(['/alumnos']);
  }

  private createForm() {
    this.alumnoForm = new FormGroup({
      nombre: new FormControl("", [Validators.minLength(2), Validators.required, Validators.maxLength(25)]),
      apellido: new FormControl("", [Validators.required, Validators.maxLength(35)]),
      ciudad: new FormControl("", [Validators.required, Validators.maxLength(25)]),
      provincia: new FormControl("10", [Validators.required])
    })
  }
}
