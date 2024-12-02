import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-pipes',
  standalone: false,

  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit{
  // registerLocaleData(localePT);

  someText = 'TESTANDO UM PIPE OPERATOR';
  today = new Date();
  constructor(){}

  ngOnInit(): void {}
}
