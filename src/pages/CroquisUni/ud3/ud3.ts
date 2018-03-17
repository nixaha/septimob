import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Sitio} from '../../../commons/Sitio';
import { CroquisPage } from '../../index.paginas';


@Component({
  selector: 'page-ud3',
  templateUrl: 'ud3.html',
})
export class Ud3Page {

  croquis: any =  CroquisPage;
  sitios: Observable<Sitio[]>;
  sitioDoc: AngularFirestoreDocument<Sitio[]>;
  sitioCollectionRef: AngularFirestoreCollection<Sitio[]>;

  constructor(public navCtrl: NavController,
     private database: AngularFirestore) {

      this.sitioCollectionRef = this.database.collection<Sitio[]>('udtres');
      
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
