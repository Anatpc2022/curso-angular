import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: string = 'Ana Cláudia';
  age: number = 43;
  job: string = 'Programadora';
  hobbies = ['correr', 'jogar', 'estudar'];
  car = {
    name: 'Polo',
    year: 2020,
    color: 'Black',
  };
}
