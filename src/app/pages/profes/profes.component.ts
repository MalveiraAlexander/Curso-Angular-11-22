import { Component } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-profes',
  templateUrl: './profes.component.html',
  styleUrls: ['./profes.component.scss'],
})
export class ProfesComponent {
  isChange: boolean = false;
  constructor(private status: StatusService) {
    this.changeTitle();
  }


  change() {
    this.isChange = !this.isChange;
    this.status.changeColor.emit(this.isChange);
  }

  changeTitle() {
    this.status.changeTitle.emit("Profesores");
  }
}
