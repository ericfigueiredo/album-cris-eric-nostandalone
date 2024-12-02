import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  standalone: false,

  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;

  constructor(){}

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
