import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal, public platform:Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notificatios(){

    if(this.platform.is('cordova')){

  this.oneSignal.startInit('f8d61218-e56b-46d3-9da6-4a47618daad2', '725356359595');
  
  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  
  this.oneSignal.handleNotificationReceived().subscribe(() => {
   // do something when notification is received
   console.log('Notificacion recibida');
  });
  
  this.oneSignal.handleNotificationOpened().subscribe(() => {
    // do something when a notification is opened
    console.log('Notificacion abierta');
  });
  
  this.oneSignal.endInit();
}else{
  console.log('OneSignal no funciona en Crome')
}
}
  
}