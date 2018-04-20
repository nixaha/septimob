import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ SeleccionarCarreraPage, HomePage } from "../../index.paginas"
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {
  seleccionar: any = SeleccionarCarreraPage;
  data = { title:'', description:''};

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
      private platform: Platform, private localNotifications: LocalNotifications,
    public navParams: NavParams) {
      }
      scheduleNotification() {

        this.data.title = this.navParams.get('title');
        this.data.description = this.navParams.get('desc');

        

          console.log(this.data);
          var date = new Date(this.data.title+" "+this.data.description);
          console.log(date);
          this.localNotifications.schedule({
             text: this.data.title,
             //at: date,
             led: 'FF0000',
             sound: this.setSound(),
          });
          let alert = this.alertCtrl.create({
            title: 'Enviado!',
            subTitle: 'Configuración de notificación con éxito',
            buttons: ['OK']
          });
          this.navCtrl.push(HomePage, {'titulo':this.data.title, 'descripcion': this.data.description});
          alert.present();
          this.data = { title:'', description:'' };
        }
        setSound() {
          if (this.platform.is('android')) {
            return 'file://assets/sounds/Rooster.mp3'
          } else {
            return 'file://assets/sounds/Rooster.caf'
          }
        }
      }
