import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: false,

  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent implements OnInit{
  name: string = '';
  age: string = '';
  job: string = '';

  constructor(){}

  ngOnInit(): void {}
}
