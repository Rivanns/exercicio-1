import { Component } from '@angular/core';
import { Header } from './header/header';
import { Board } from './board/board';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, Board, Menu, Footer],
  selector: 'app-portifolio',
  styleUrl: './portifolio.css',
  templateUrl: './portifolio.html',
})
export class Portifolio {}
