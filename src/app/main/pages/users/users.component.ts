import { Component, OnInit } from '@angular/core';
import { LoginResponseModel } from 'src/app/auth/models/login.model';
import { StorageService } from 'src/app/services/storage.service';
import { UserResponseModel } from '../../models/user.model';
import { RefreshService } from '../../services/refresh.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserResponseModel[] = [];
  constructor(private userService: UserService,
              private refresh: RefreshService,
              private storage: StorageService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this.userService.listarUsuarios(0, 10).subscribe({
      next: (data: UserResponseModel[]) => {
        this.users = data;
      },
      error: (error) => {
        console.log(error);
        this.refresh.refreshAsync(error.status).then((data: boolean) => {
          console.log("RefreshToken por si");
          if (data) {
            this.getUsers();
          }
        }).catch(error => {
          console.log("RefreshToken por no");
          console.log(error);
        }).finally(() => {
          console.log("RefreshToken por si o por no");
        })

      },
      complete: () => {

      }
    })
  }
}
