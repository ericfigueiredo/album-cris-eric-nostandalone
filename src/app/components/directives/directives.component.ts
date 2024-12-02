import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: false,

  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor(){}

  ngOnInit(): void {
  }
}
