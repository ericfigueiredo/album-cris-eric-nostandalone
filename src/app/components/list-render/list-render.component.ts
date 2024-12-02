import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: false,

  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  // animals: Animal[] = [                            //Referente às aulas 12 e 13
    //   {name:'Falcor', type: 'Cachorro', age:11},   // Alterado na aula #18
    //   {name:'Horse', type: 'Cavalo', age:16},
    //   {name:'Eagle', type: 'Pássaro', age:2},
    //   {name:'Poney', type: 'Jumento', age:40},
    // ];

    animals: Animal[] = [];

  // animal: Animal = {       // Eliminado na aula #19
  //   name: 'Dunkan',
  //   type: 'Cachorro',
  //   age: 8
  // };

animalDetails = '';

  constructor(private listService: ListService){
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = `O ${animal.name} é um ${animal.type} e tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
console.log("Removendo animal...");
this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
