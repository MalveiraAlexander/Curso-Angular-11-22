import { Component, Input, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() title: string = "";
  isChangeColor: boolean = false;
  constructor(private status: StatusService) {}
  ngOnInit(): void {
    this.status.changeColor.subscribe((data: boolean) => {
      this.isChangeColor = data;
    })

    this.status.changeTitle.subscribe((data: string) => {
      this.title = data;
    })
  }
}
