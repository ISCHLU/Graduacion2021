import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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


}
