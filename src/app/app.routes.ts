import { Routes } from '@angular/router';
import { Portifolio } from './portifolio/portifolio';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';

export const routes: Routes = [

    {path: 'boas-vindas', component: Portifolio},
    {path: 'objetos', component: ExemploObjeto}
];
