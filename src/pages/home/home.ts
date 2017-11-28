import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Noticia } from '../../commons/Noticia';
import{ HomegPage } from "../index.paginas"



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: Observable<Noticia[]>;
  notiDoc: AngularFirestoreDocument<Noticia[]>;
  notiCollectionRef: AngularFirestoreCollection<Noticia[]>;
  homeg:any = HomegPage;

  constructor(public navCtrl: NavController,
    private database: AngularFirestore) {
      this.notiCollectionRef = this.database.collection<Noticia[]>('noticias');
      
      this.noticias = this.notiCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Noticia;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  detalles(_noticia: Noticia){
    this.navCtrl.push(HomegPage, {
      id: _noticia
    })
  }

}
