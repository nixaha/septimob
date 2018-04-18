import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Horario } from '../../../commons/Horario';
import { Prueba} from '../../../commons/Prueba';

import { GrupoambPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({ 
  selector: 'page-horarios-amb',
  templateUrl: 'horarios-amb.html',
})
export class HorariosAmbPage {
  grupoamb:any = GrupoambPage;
  seleccionar: any = SeleccionarCarreraPage;
  horarios: Observable<Horario[]>;
  photoDoc: AngularFirestoreDocument<Horario[]>;
  photoCollectionRef: AngularFirestoreCollection<Horario[]>;

  constructor(public navCtrl: NavController, 
    private database: AngularFirestore) {

      this.photoCollectionRef = this.database.collection('users').doc('ambiental')
      .collection<Horario[]>('horarios');

     // this.photoCollectionRef.ref.orderBy('grado');
    

    
      
      this.horarios = this.photoCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Horario;
          
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });

      


  }

  detalles(_horario: Horario){
    this.navCtrl.push(GrupoambPage, {
      id: _horario
    })
  }
  }





