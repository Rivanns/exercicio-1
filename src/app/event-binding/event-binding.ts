import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-event-binding',
  styleUrl: './event-binding.css',
  templateUrl: './event-binding.html',
})
export class EventBinding {

  texto= '';

  botaoDesabilitado = false;

  registrarClick() {
    this.botaoDesabilitado = !this.botaoDesabilitado;
    alert('O botão foi clicado');
  }
  registrarHover(): void {
    console.log('Passou o mouse!');
  }
}
