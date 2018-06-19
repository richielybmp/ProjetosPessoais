import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles:[
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url = "http://github.com/richielybmp";

  cursoAngular = true;

  urlImagem = "https://picsum.photos/200/300/?random";

  valorAtual:string = '';

  valorSalvo = '';

  isMouseOver: boolean = false;

  constructor() { }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  eventoMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;    
  }

  ngOnInit


}
