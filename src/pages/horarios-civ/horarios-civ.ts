import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Horario } from '../../commons/Horario';
import { GruposPage} from '../index.paginas';

@Component({
  selector: 'page-horarios-civ',
  templateUrl: 'horarios-civ.html',
})
export class HorariosCivPage {
  horarios: Observable<Horario[]>;
  photoDoc: AngularFirestoreDocument<Horario[]>;
  photoCollectionRef: AngularFirestoreCollection<Horario[]>;
  grupos:any = GruposPage;

  constructor(public navCtrl: NavController, 
    private database: AngularFirestore) {
  }

  ionViewDidLoad() {

    this.photoCollectionRef = this.database.collection<Horario[]>('civil');
    
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
