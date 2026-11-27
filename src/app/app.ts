import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { Header } from './components/header/header';
import { EventBinding } from './event-binding/event-binding';
import { Exercicio6 } from './exercicio-6/exercicio-6';
import { ExemploForm } from './exemplo-form/exemplo-form';


@Component({
  imports: [RouterOutlet, Portifolio, ExemploObjeto, Header, EventBinding, Exercicio6, ExemploForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exercicio-1');
}
