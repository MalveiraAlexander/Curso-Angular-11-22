import { Component, OnInit } from '@angular/core';
import { RoleResponseModel } from '../../models/role.model';
import { RefreshService } from '../../services/refresh.service';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles: RoleResponseModel[] = [];
  constructor(private roleService: RolesService,
    private refresh: RefreshService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles().subscribe({
      next: (data: RoleResponseModel[]) => {
        this.roles = data;
      },
      error: (error) => {
        this.refresh.refreshAsync(error.status).then((data: boolean) => {
          console.log("RefreshToken por si");
          if (data) {
            this.getRoles();
          }
        }).catch(error => {
          console.log("RefreshToken por no");
          console.log(error);
        }).finally(() => {
          console.log("RefreshToken por si o por no");
        })
      }
    })
  }
}
