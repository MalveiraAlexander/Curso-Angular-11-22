import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaGuard } from './guards/prueba.guard';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfesComponent } from './pages/profes/profes.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent, title: 'Alumnos - Clase2' },
  { path: 'profes', component: ProfesComponent, title: 'Profesores - Clase2', canActivate: [PruebaGuard]},
  { path: 'home', component: HomeComponent, title: 'Home - Clase2' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
