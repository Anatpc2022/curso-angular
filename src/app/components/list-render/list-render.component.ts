import { Animal } from './../../Animal';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }
  animalsDetails = '';

  animals: Animal[] = [];
  showAge(animal: Animal): void {
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
