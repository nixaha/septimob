import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Noticia } from '../../../commons/Noticia';
import{ HomegPage, SeleccionarCarreraPage } from "../../index.paginas"

const RUTA:string = 'https://firebasestorage.googleapis.com/v0/b/appunipoli.appspot.com/o/logo%20unipoli.png?alt=media&token=1fb7118d-e501-46d9-8840-35d0c8fb614a';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: Observable<Noticia[]>;
  notiDoc: AngularFirestoreDocument<Noticia[]>;
  notiCollectionRef: AngularFirestoreCollection<Noticia[]>;
  homeg:any = HomegPage;
  seleccionar: any = SeleccionarCarreraPage;

  titulo:string ='';
  descripcion:string='';
  
  

  constructor(public navCtrl: NavController,
    private database: AngularFirestore,
    public navParams: NavParams) {
      this.notiCollectionRef = this.database.collection<Noticia[]>('noticiasEventos');
      
      this.noticias = this.notiCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Noticia;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });

      this.titulo = this.navParams.get('titulo');
      this.descripcion = this.navParams.get('descripcion');
      console.log

    if(this.titulo != null) {
        const id = this.database.createId();
        const noticia: Noticia = { 'titulo':this.titulo, 'descripcion':this.descripcion, 'foto':RUTA};
        this.notiCollectionRef.doc(id).set(noticia); 
        this.navCtrl.push(HomegPage, {
          id: noticia
        });    
    }
    
      
  }
 /* addItem(_noticia:Noticia) {
    // Persist a document id
    const id = this.database.createId();
    const noticia: Noticia = { 'titulo':this.titulo, 'descripcion':this.descripcion, 'foto':''};
    this.notiCollectionRef.doc(id).set(noticia);
  } */

  detalles(_noticia: Noticia){
    this.navCtrl.push(HomegPage, {
      id: _noticia
    })
  }

}
