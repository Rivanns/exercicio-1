import { Routes } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { PaginaNaoEncontrada } from './components/pagina-nao-encontrada/pagina-nao-encontrada';
import { EventBinding } from './event-binding/event-binding';
import { Exercicio6 } from './exercicio-6/exercicio-6';

export const routes: Routes = [

    {path: 'boas-vindas', component: Portifolio},
    {path: 'objetos', component: ExemploObjeto},
    {path: '', redirectTo: '/boas-vindas', pathMatch: 'full'},
    {path: 'ex-6', component: Exercicio6},
    {path: '**', component: PaginaNaoEncontrada},
    {path: 'event-binding', component: EventBinding}
];
