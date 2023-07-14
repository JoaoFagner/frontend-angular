import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroFormComponent } from './components/forms/cadastro-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { FilterPipe } from './components/utils/filter.pipe';

FilterPipe

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastroComponent,
    EditarComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    CadastroFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
