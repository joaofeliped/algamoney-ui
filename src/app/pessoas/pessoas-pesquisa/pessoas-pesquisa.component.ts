import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {
      nome: 'João', cidade: 'Brasília', estado: 'DF', ativo: true
    },
    {
      nome: 'João', cidade: 'Brasília', estado: 'DF', ativo: false
    },
    {
      nome: 'João', cidade: 'Brasília', estado: 'DF', ativo: false
    },
    {
      nome: 'João', cidade: 'Brasília', estado: 'DF', ativo: true
    },
    {
      nome: 'João', cidade: 'Brasília', estado: 'DF', ativo: false
    }
  ];

}
