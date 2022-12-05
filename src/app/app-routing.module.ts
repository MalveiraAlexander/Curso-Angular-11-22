import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaGuard } from './guards/prueba.guard';
import { AltaAlumnoComponent } from './pages/alta-alumno/alta-alumno.component';
import { AltaProfesComponent } from './pages/alta-profes/alta-profes.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfesComponent } from './pages/profes/profes.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent, title: 'Alumnos - Clase3' },
  { path: 'alumnos/add', component: AltaAlumnoComponent, title: 'Alta Alumno - Clase3', canActivate: [PruebaGuard] },
  { path: 'profes', component: ProfesComponent, title: 'Profesores - Clase3', canActivate: [PruebaGuard]},
  { path: 'profes/add', component: AltaProfesComponent, title: 'Alta Profesor - Clase3', canActivate: [PruebaGuard]},
  { path: 'home', component: HomeComponent, title: 'Home - Clase3' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
