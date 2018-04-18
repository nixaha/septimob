import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Usuario } from '../../commons/usuario';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;
  usuario: Usuario;

  constructor(
    public alertCtrl: AlertController,
    private firebaseAuth: AngularFireAuth,
    private database: AngularFirestore,
    private storage: Storage, 
  
  ) {
    
    this.user = firebaseAuth.authState;

    firebase.auth().onAuthStateChanged(u => {
      if(u){
        firebase.firestore().collection("users").get().then(snap => {
          snap.forEach(user => {
            if (u.email == user.data().email) {
              this.usuario = user.data() as Usuario;
              this.usuario.id = user.id;
            }
          })
        })
      }
    })
    console.log('Hello AuthProvider Provider');
  }

  signup(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      }).catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      }).catch(err => {
        /*this.alertCtrl.create({
          title: "Error!",
          message: err.message
        }).present();*/
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}