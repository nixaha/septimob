import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import{ RegistroPage, InformacionEventosPage, OlvidarcontraPage
 } from "../../index.paginas"
 import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  registro:any = RegistroPage;
  olvidar:any = OlvidarcontraPage;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  async login(user: User) {
    try {
      
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
      if (user.emailVerified) {
        this.navCtrl.setRoot(InformacionEventosPage);
      }  else{
      }
      });
    }
    catch (e) {
      console.error(e);
      let alert = this.alertCtrl.create({
        title: 'Registro o contraseña incorrecta',
        buttons: ['OK']
      }); 
      alert.present();
    }
  }
 
  sendEmailVerification(){
    this.afAuth.authState.subscribe(user => {
      user.sendEmailVerification()
      .then(() => {
        console.log('email sent');
      })
    });
  }
  
}
