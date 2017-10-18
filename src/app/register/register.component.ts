import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }



  form_cadastro(f: NgForm) {
    if (!f.valid) {
      return;
    }
    if(f.controls.password.value.length < 6){
      alert("Senha muito curta");
    } else {
        if(f.controls.password2.value === f.controls.password.value  ){

            this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok=>{
                alert('Usuario cadastrado com sucesso. ');
            }).catch((error)=>{

                alert(error.message);
            });

        } else{
          alert('Senhas não são iguais');
        }
    }


  }

}
