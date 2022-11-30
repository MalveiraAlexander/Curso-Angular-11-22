import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit{
  alumnoForm: FormGroup;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.createForm();
  }


  agregar() {
    console.log(this.alumnoForm);
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
