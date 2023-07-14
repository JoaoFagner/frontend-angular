import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';


const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
