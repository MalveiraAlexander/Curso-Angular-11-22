import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserService } from './services/user.service';
import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UserAddUpdateComponent } from './pages/add-Update/user-add-update/user-add-update.component';
import { HttpClientModule } from '@angular/common/http';
import { RefreshService } from './services/refresh.service';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { RolesComponent } from './pages/roles/roles.component';
import { RolesService } from './services/roles.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserAddUpdateComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    UserService,
    RefreshService,
    RolesService
  ]
})
export class MainModule { }
