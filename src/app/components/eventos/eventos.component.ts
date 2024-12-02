import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: false,

  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  textoBotao = 'Mostrar mensagem';
  constructor(){}

  ngOnInit(): void {
  }

  showMessage(): void{
     this.show = !this.show;    //Isto é um toogle (é a inversão do estado atual.. se 'true', passa a ser 'false'.. e vice e versa)
     this.textoBotao === 'Mostrar mensagem' ? this.textoBotao = 'Ocultar mensagem' : this.textoBotao = 'Mostrar mensagem';
  }
}
