import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  standalone: false,
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent implements OnInit {
  canShow: boolean = true;
  name = 'Eric';
  constructor(){}

  ngOnInit(): void {}
}
