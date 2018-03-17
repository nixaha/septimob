import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Noticia } from '../../../commons/Noticia';
import{ InformacionPage, SeleccionarCarreraPage } from "../../index.paginas"
import { Evento } from '../../../commons/Evento';


@Component({
  selector: 'page-informacionEventos',
  templateUrl: 'informacionEventos.html'
})
export class InformacionEventosPage {

  eventos: Observable<Evento[]>;
  eventDoc: AngularFirestoreDocument<Evento[]>;
  eventCollectionRef: AngularFirestoreCollection<Evento[]>;
  informacion:any = InformacionPage;
  seleccionar: any = SeleccionarCarreraPage;
    
  constructor(public navCtrl: NavController,
    private database: AngularFirestore) {
      this.eventCollectionRef = this.database.collection<Evento[]>('informacion_eventos');
      
      this.eventos = this.eventCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Noticia;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  detalles(_evento: Evento){
    this.navCtrl.push(InformacionPage, {
      id: _evento
    })
  }

}