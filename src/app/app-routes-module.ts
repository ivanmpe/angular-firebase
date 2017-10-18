import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import {ListaProdutosComponent} from './lista-produtos/lista-produtos.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'lista-produtos', component: ListaProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
