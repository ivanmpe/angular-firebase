import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor(private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  form_submit(f: NgForm) {
      this.database.list("produtos").push({
      name: f.controls.name.value,
      valor: f.controls.valor.value,
      peso: f.controls.peso.value
    });
  }


}
