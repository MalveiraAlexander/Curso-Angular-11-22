import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfeModel } from 'src/app/models/profe.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ProfesService } from 'src/app/services/profes.service';

@Component({
  selector: 'app-alta-profes',
  templateUrl: './alta-profes.component.html',
  styleUrls: ['./alta-profes.component.scss'],
  providers: [
    ProfesService
  ]
})
export class AltaProfesComponent implements OnInit{
  profe: ProfeModel = new ProfeModel();
  constructor(private router: Router, private service: ProfesService) {}
  ngOnInit(): void {
  }
  agregar(form: FormGroup) {
    console.log(form);
    this.router.navigate(['/profes']);
  }
}


