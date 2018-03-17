import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ HomePage
} from "../../index.paginas"

@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {
  home:any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnoPage');
  }

}
