import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graduacion2021';
  usuario : firebase.User;
  cargando : boolean = true ;

  constructor(private auth: AngularFireAuth){

    

    this.auth.user.subscribe((usuario)=>{


 

        this.cargando=false;
        this.usuario = usuario


     
   
   
    })

  }


}
