import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes : Observable<any[]>;

  constructor(database : AngularFireDatabase) {
    this.clientes = database.list('clientes');
 }

  ngOnInit() {
  }

}
