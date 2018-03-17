import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlumnoPage } from '../alumno/alumno';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-seleccionar-carrera',
  templateUrl: 'seleccionar-carrera.html',
})
export class SeleccionarCarreraPage {
  alumno: any = AlumnoPage;
  login: any = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionarCarreraPage');
  }
  perfil(value){

    console.log(value);
    if (value == 'alu'){
      this.navCtrl.push(AlumnoPage);

    }else if (value == 'profe'){
      this.navCtrl.push(LoginPage);

    }
  }

}
