import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ HomegPage } from "../index.paginas"



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeg:any = HomegPage;

  constructor(public navCtrl: NavController) {

  }

}
