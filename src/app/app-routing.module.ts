import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './account/shared/auth.guard';

//CORE
import { ApplicationComponent } from './core/application/application.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';

//ACCOUNT
import { LoginComponent } from './account/login/login.component';

//PAGES
import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageRestaurantesComponent } from './pages/page-restaurantes/page-restaurantes.component';
import { PageResultadoComponent } from './pages/page-resultado/page-resultado.component';
import { PageUsuariosComponent } from './pages/page-usuarios/page-usuarios.component';
import { PageVotacaoComponent } from './pages/page-votacao/page-votacao.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      { path: '', component: PageInicioComponent },
      { path: 'home', component: PageInicioComponent },
      { path: 'resultado', component: PageResultadoComponent },
      { path: 'votacao', component: PageVotacaoComponent },
      { path: 'restaurantes', component: PageRestaurantesComponent },
      { path: 'usuarios', component: PageUsuariosComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
