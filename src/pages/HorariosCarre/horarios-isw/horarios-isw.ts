import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Horario } from '../../../commons/Horario';
import{ GrupoiswPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-isw',
  templateUrl: 'horarios-isw.html',
})
export class HorariosIswPage {
  grupoisw:any = GrupoiswPage;
  seleccionar: any = SeleccionarCarreraPage;
  horarios: Observable<Horario[]>;
  photoDoc: AngularFirestoreDocument<Horario[]>;
  photoCollectionRef: AngularFirestoreCollection<Horario[]>;

  constructor(public navCtrl: NavController, 
    private database: AngularFirestore) {

      this.photoCollectionRef = this.database.collection('users').doc('software').collection<Horario[]>('horarios');
      
      this.horarios = this.photoCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Horario;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });


  }

  detalles(_horario: Horario){
    this.navCtrl.push(GrupoiswPage, {
      id: _horario
    })
  }
  }

