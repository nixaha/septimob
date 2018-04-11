import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Sitio} from '../../../commons/Sitio';
import { CroquisPage, SeleccionarCarreraPage } from '../../index.paginas'; 


@Component({
  selector: 'page-areas-deportivas-y-cafeterias',
  templateUrl: 'areas-deportivas-y-cafeterias.html',
})
export class AreasDeportivasYCafeteriasPage {
  croquis: any =  CroquisPage;
  sitios: Observable<Sitio[]>;
  sitioDoc: AngularFirestoreDocument<Sitio[]>;
  sitioCollectionRef: AngularFirestoreCollection<Sitio[]>;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, private database: AngularFirestore) {
      
    this.sitioCollectionRef = this.database.collection<Sitio[]>('areas_deportivas_y_cafeteria');
    
    this.sitios = this.sitioCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Sitio;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
}

detalles(_sitio: Sitio){
this.navCtrl.push(CroquisPage, {
id: _sitio
})
}

}

