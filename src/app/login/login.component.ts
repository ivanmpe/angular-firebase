import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})

export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit() {}

  form_login(f: NgForm) {
    if (!f.valid) {
      return;
    }

    
    this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok => {
      this.router.navigate(["/index"]);
    }).catch((error)=>{
        alert(error.message);
    });
  }

}
