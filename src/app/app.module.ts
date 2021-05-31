import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

//CORE
import { ApplicationComponent } from './core/application/application.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';

//LAYOUT
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ContentComponent } from './layout/content/content.component';

//PAGES
import { PageResultadoComponent } from './pages/page-resultado/page-resultado.component';
import { PageVotacaoComponent } from './pages/page-votacao/page-votacao.component';
import { PageRestaurantesComponent } from './pages/page-restaurantes/page-restaurantes.component';
import { PageInicioComponent } from './pages/page-inicio/page-inicio.component';
import { PageUsuariosComponent } from './pages/page-usuarios/page-usuarios.component';

//SERVICES
import { ApiLocalService } from './services/local-api/api-local.service';
import { LoginComponent } from './account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ContentComponent,
    PageResultadoComponent,
    PageVotacaoComponent,
    PageRestaurantesComponent,
    PageInicioComponent,
    PageUsuariosComponent,
    LoginComponent,
    ApplicationComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      maxOpened: 2,
      autoDismiss: true,
    }),
  ],
  providers: [ApiLocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
