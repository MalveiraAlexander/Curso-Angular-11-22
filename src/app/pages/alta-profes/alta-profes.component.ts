import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfeModel } from 'src/app/models/profe.model';

@Component({
  selector: 'app-alta-profes',
  templateUrl: './alta-profes.component.html',
  styleUrls: ['./alta-profes.component.scss']
})
export class AltaProfesComponent implements OnInit{
  profe: ProfeModel = new ProfeModel();
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  agregar(form: FormGroup) {
    console.log(form);
    this.router.navigate(['/profes']);
  }
}


