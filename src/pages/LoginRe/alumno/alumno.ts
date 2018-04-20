import { Component } from '@angular/core';
import { NavController, NavParams, ShowWhen, ActionSheet } from 'ionic-angular';
import{ HomePage, InformacionEventosPage
} from "../../index.paginas"

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import { Alumno } from '../../../commons/alumno'

@Component({
  selector: 'page-alumno',
  templateUrl: 'alumno.html',
})
export class AlumnoPage {
  
  student:Observable<Alumno[]>;
  studentDoc:AngularFirestoreDocument<Alumno[]>;
  studentCollectionRef: AngularFirestoreCollection<Alumno[]>;

  carrera:string = '';
  
  home:any = HomePage;
  tab4Root = InformacionEventosPage;

  constructor(public navCtrl: NavController,
      private database: AngularFirestore) {

        this.studentCollectionRef = this.database.collection<Alumno[]>('alumnos');

        this.student = this.studentCollectionRef.snapshotChanges().map(actions =>{
          return actions.map( action =>{
            const data = action.payload.doc.data() as Alumno;
            const id = action.payload.doc.id;
            return { id, ...data}
          })

        })

        

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnoPage');
  }

  hide(carrera,_student: Alumno){
    const id = this.database.createId();
        const student : Alumno = {'carrera': carrera }
        this.studentCollectionRef.doc(id).set(student);  
        this.navCtrl.push(HomePage); 
  }

}
