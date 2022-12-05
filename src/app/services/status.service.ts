import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  @Output() changeColor: EventEmitter<boolean> = new EventEmitter();
  @Output() changeTitle: EventEmitter<string> = new EventEmitter();
}
