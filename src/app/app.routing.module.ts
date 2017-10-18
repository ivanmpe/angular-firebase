import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { RegisterComponent} from './register/register.component';



const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'index', component: CadastroClienteComponent },
{ path: 'cadastro', component: RegisterComponent }
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
