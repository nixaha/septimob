import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import{ RegistroPage, HomePage
 } from "../../index.paginas"

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  registro:any = RegistroPage;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  async login(user: User) {
    try {
      
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
      if (user.emailVerified) {
        this.navCtrl.setRoot(HomePage);
      }  else{
      }
      });
    }
    catch (e) {
      console.error(e);
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
