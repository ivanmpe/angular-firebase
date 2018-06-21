import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { AngularFireAuth } from 'angularfire2/auth';
import {AppRoutingModule} from './app.routing.module';


var config = {
    //firebase token
  };


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    CadastroProdutoComponent,
    LoginComponent,
    RegisterComponent,
    CadastroClienteComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AppRoutingModule
  ],
  providers: [AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
