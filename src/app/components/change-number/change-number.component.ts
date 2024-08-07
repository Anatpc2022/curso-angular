import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css',
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}
  handleClick() {
    this.changeNumber.emit();
  }
}
