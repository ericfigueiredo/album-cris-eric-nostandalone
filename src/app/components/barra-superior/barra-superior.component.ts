import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  standalone: false,
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})
export class BarraSuperiorComponent implements OnInit {
  name: string = 'Eric';
  age: number = 44;
  job = 'Analista desenvolvedor Angular Pleno';
  hobbies = ['Fazer festas','Musculação','Estudar'];
  car = {
    name: 'Ecosport',
    year: '2009'
  }

  constructor(){}

  ngOnInit(): void{
  }
}
