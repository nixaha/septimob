import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformacionPage, SeleccionarCarreraPage} from '../../index.paginas';

@Component({
  selector: 'page-informacionEventos',
  templateUrl: 'informacionEventos.html'
})
export class InformacionEventosPage {
  informacion:any = InformacionPage;
  seleccionar: any = SeleccionarCarreraPage;

  title: string = '';
  desc: string = '';
    
  constructor(public navCtrl: NavController) {
    
    
  }

  send(){
    console.log(this.title, this.desc);
    this.navCtrl.push(InformacionPage, {'title':this.title,'desc':this.desc})
  }

}