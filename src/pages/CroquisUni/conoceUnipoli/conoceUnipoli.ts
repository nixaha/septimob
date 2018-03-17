import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Ud1Page,
Ud2Page,
Ud3Page,
LaboratoriosPage,
AreasDeportivasYCafeteriasPage,
CentroInformacionPage, SeleccionarCarreraPage } from "../../index.paginas"


@Component({
  selector: 'page-conoceUnipoli',
  templateUrl: 'conoceUnipoli.html',
})
export class ConoceUnipoliPage {
  
  ud1:any = Ud1Page;
  ud2:any = Ud2Page;
  ud3:any = Ud3Page;
  centro_informacion:any = CentroInformacionPage;
  laboratorios:any = LaboratoriosPage;
  areas:any = AreasDeportivasYCafeteriasPage;
  seleccionar: any = SeleccionarCarreraPage;
 

  constructor(public navCtrl: NavController) {    
    
        
  }
  
}
