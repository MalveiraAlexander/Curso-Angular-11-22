import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Characteristic, Person, UserRequestModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(private auth: AuthService, private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() : void {
    this.createForm();
  }

  openSnackBar() {
    this._snackBar.open('Registro Exitoso!', null, {
      duration: 2000
    })
  }

  alta() {
    let user: UserRequestModel = new UserRequestModel();
    user.person = new Person();
    user.email = this.registerForm.value.email;
    user.userName = user.email.split('@')[0];
    user.password = this.registerForm.value.password;
    user.phone = this.registerForm.value.phone;
    user.person.firstName = this.registerForm.value.nombre;
    user.person.lastName = this.registerForm.value.apellido;
    user.person.city = "x";
    user.person.state = "x";
    user.person.country = "x";
    user.person.cp = "x";
    user.person.picture  = "x";
    user.person.dniCuit  = "x";
    user.characteristics = [];
    let chart = new Characteristic()
    chart.name = 'x';
    chart.value = 'X';
    chart.canToken = false;
    user.characteristics.push(chart);
    this.auth.register(user).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.openSnackBar();
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      }
    })
  }

  private createForm() {
    this.registerForm = new FormGroup({
      nombre: new FormControl("", [Validators.required, Validators.maxLength(35)]),
      apellido: new FormControl("", [Validators.required, Validators.maxLength(35)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }
}
