import { Routes } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { PaginaNaoEncontrada } from './components/pagina-nao-encontrada/pagina-nao-encontrada';
import { EventBinding } from './event-binding/event-binding';

export const routes: Routes = [

    {path: 'boas-vindas', component: Portifolio},
    {path: 'objetos', component: ExemploObjeto},
    {path: '', redirectTo: '/boas-vindas', pathMatch: 'full'},
    {path: '**', component: PaginaNaoEncontrada},
    {path: 'event-binding', component: EventBinding}
];
