import { Component } from '@angular/core';
import { Produto } from './produto';
import { Pessoa } from './pessoa';
import { Mercado } from './mercado';

@Component({
  imports: [],
  selector: 'app-exemplo-objeto',
  styleUrl: './exemplo-objeto.css',
  templateUrl: './exemplo-objeto.html',
})
export class ExemploObjeto {
  
skate: Produto = {
  nome: 'Robson',
  descricao: 'Skate sem rodas',
  preco: 1000000
};

pessoa1: Pessoa ={
  nome: 'Romulo',
  sexo: 'masculino',
  data_nasc: '23/05/1989',
  estado_civil: 'casado'
}

pessoa2: Pessoa ={
  nome: 'Adelaide',
  sexo: 'feminino',
  data_nasc: '19/10/1994',
  estado_civil: 'soteira'
}

mercado1: Mercado ={
  nome: 'Unidade de Blumenau',
  num_macas: 200,
  preco_macas: 4,
  num_laranja: 150,
  preco_laranja: 6
}

mercado2: Mercado ={
  nome: 'Unidade de Joinville',
  num_macas: 90,
  preco_macas: 3,
  num_laranja: 80,
  preco_laranja: 5
}

mercado3: Mercado ={
  nome: 'Unidade de Florianopolis',
  num_macas: 190,
  preco_macas: 5,
  num_laranja: 160,
  preco_laranja: 7
}
}
