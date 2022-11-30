import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { ProfesComponent } from './pages/profes/profes.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AltaAlumnoComponent } from './pages/alta-alumno/alta-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaProfesComponent } from './pages/alta-profes/alta-profes.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesComponent,
    HomeComponent,
    NavComponent,
    AltaAlumnoComponent,
    AltaProfesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
