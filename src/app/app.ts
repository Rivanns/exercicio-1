import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';


@Component({
  imports: [RouterOutlet, Portifolio],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exercicio-1');
}
