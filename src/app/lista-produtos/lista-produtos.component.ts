import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produto: Observable<any[]>;

  constructor(database : AngularFireDatabase) {
    this.produto = database.list('produtos');
  }


  ngOnInit() {
  }

}
