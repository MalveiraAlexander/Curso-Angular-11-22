import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthNotGuard } from './guards/auth-not.guard';
import { AuthGuard } from './guards/auth.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule),
                                      component: AuthComponent,
                                      canActivate: [AuthNotGuard]},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule),
                                      component: MainComponent,
                                      canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
