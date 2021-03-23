import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { ActividadesComponent } from '../actividades/actividades.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  txt = document.getElementById("cabecera");
  ventanas : string = ' '
  usuario : firebase.User;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {

    this.auth.user.subscribe((usuario)=>{

      this.usuario = usuario
 
  })
  }

  logout() {
    this.auth.signOut();
  }
  actividades() {
    
   
    
  }
  anuario() {
    
  }
  invitacion() {
    
  }
  graduados() {
    
  }
  video() {
    
  }


}
