import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ SeleccionarCarreraPage } from "../index.paginas"
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-enlaces',
  templateUrl: 'enlaces.html',
})
export class EnlacesPage {
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }
  browser1(){
    const browser = this.iab.create('http://www.unipolidgo.edu.mx/moodle/login/index.php','_self'
    ,{location:'no'});
}
browser2(){
  const browser = this.iab.create('http://192.241.222.183:8080/apex/f?p=149:LOGIN:24594822925562:::::','_self'
  ,{location:'no'});
}
browser3(){
  const browser = this.iab.create('http://192.241.222.183:8081/apex/f?p=158:LOGIN_DESKTOP:9123804098622:::::','_self'
  ,{location:'no'});
}
}
