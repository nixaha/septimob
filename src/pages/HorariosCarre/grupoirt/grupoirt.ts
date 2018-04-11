import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Horario } from '../../../commons/Horario';
import{ GruposPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-grupoirt',
  templateUrl: 'grupoirt.html',
})
export class GrupoirtPage {
  horarios: Observable<Horario[]>;
  photoDoc: AngularFirestoreDocument<Horario[]>;
  photoCollectionRef: AngularFirestoreCollection<Horario[]>;
  grupos:any = GruposPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, private database: AngularFirestore) {
    this.photoCollectionRef = this.database.collection<Horario[]>('redes');
    
    this.horarios = this.photoCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Horario;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });


}

detalles(_horario: Horario){
  this.navCtrl.push(GruposPage, {
    id: _horario
  })
}
}
