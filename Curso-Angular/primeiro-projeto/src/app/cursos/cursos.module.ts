import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursosDetalheComponent],
  exports: [
    CursosComponent, 
    //se exportarmos o CursoDetalheComponent, poderemos utilizar ele
    //CursosDetalheComponent
  ]
})
export class CursosModule { }
