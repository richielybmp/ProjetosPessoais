import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:string;

  cursos: string [];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = "http://loiane.training";

    // a injeção de dependencia está no construtor
    //var servico = new CursosService();
    // para o servico funcionar devemos adicionar o 'provider'
    // no arquivo de modulo onde ele foi criado
    this.cursos = cursosService.getCursos();

  }

  ngOnInit() {
  }

}
