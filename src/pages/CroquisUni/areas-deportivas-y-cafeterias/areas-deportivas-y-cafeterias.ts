import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas'; 


@Component({
  selector: 'page-areas-deportivas-y-cafeterias',
  templateUrl: 'areas-deportivas-y-cafeterias.html',
})
export class AreasDeportivasYCafeteriasPage {

  croquis: any =  CroquisPage;


  constructor(public navCtrl: NavController) {
    
    }
}
