import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { Header } from './components/header/header';


@Component({
  imports: [RouterOutlet, Portifolio, ExemploObjeto, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exercicio-1');
}
