import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TokenModel } from 'src/app/models/token.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'main-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() title: string = "";
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen: boolean = false;
  isChangeColor: boolean = false;
  data: TokenModel;
  constructor(private storage: StorageService, private router: Router) {}
  ngOnInit(): void {
    this.data = this.storage.getUserData();
  }

  openNav() {
    this.open.emit(true);
  }
  close(){
    console.log('aqui');

    localStorage.clear();
    location.reload();
  }
}
