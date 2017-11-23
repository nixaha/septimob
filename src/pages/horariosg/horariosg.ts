import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ GruposPage } from "../index.paginas"

@Component({
  selector: 'page-horariosg',
  templateUrl: 'horariosg.html'
})
export class HorariosgPage {

  mutante:any[] = [

    {
      nombre: "1°"
    },

    {
      nombre: "2°"
    },

    {
      nombre: "3°"
    },

    {
      nombre: "4°"
    },

    {
      nombre: "5°"
    },

    {
      nombre: "6°"
    },

    {
      nombre: "7°"
    },
    
    {
      nombre: "8°"
    },

    {
      nombre: "9°"
    },
    
  ]

  //grupos:any = GruposPage;

  constructor(public navCtrl: NavController) {}

    irGrupos( mutante:any ){

      console.log( mutante );

      this.navCtrl.push( GruposPage, { 'nombre': mutante } );

  }

}