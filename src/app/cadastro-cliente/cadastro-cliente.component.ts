import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router ) { }

  ngOnInit() {

  }

  form_submit(f: NgForm) {
      this.database.list("clientes").push({
      nome: f.controls.nome.value,
      cpf: f.controls.cpf.value,
      rg: f.controls.rg.value,
      rua: f.controls.rua.value,
      bairro: f.controls.bairro.value,
      cidade: f.controls.cidade.value,
    });
  }
  form_logout(){
    this.afAuth.auth.signOut();
    this.router.navigate([""]);
  }

}
