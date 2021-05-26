import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageRestaurantesComponent } from './pages/page-restaurantes/page-restaurantes.component';
import { PageResultadoComponent } from './pages/page-resultado/page-resultado.component';
import { PageUsuariosComponent } from './pages/page-usuarios/page-usuarios.component';
import { PageVotacaoComponent } from './pages/page-votacao/page-votacao.component';

const routes: Routes = [
  { path: '', component: PageRestaurantesComponent },
  { path: 'home', component: PageInicioComponent },
  { path: 'resultado', component: PageResultadoComponent },
  { path: 'votacao', component: PageVotacaoComponent },
  { path: 'restaurantes', component: PageRestaurantesComponent },
  { path: 'usuarios', component: PageUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
