import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-homeg',
  templateUrl: 'homeg.html'
})
export class HomegPage {
  
  noticia:any = {};
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams);
    this.noticia= this.navParams.get('id');

  }

}