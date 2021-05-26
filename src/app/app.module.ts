import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//LAYOUT
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenuComponent } from './layout/menu/menu.component';

//PAGES
import { PageResultadoComponent } from './pages/page-resultado/page-resultado.component';
import { PageVotacaoComponent } from './pages/page-votacao/page-votacao.component';
import { PageRestaurantesComponent } from './pages/page-restaurantes/page-restaurantes.component';
import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageUsuariosComponent } from './pages/page-usuarios/page-usuarios.component';
import { ContentComponent } from './layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    PageResultadoComponent,
    PageVotacaoComponent,
    PageRestaurantesComponent,
    PageInicioComponent,
    PageUsuariosComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
