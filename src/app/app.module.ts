import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HorariosPage,
  HorariosIswPage,
  HorariosAmbPage,
  HorariosCivPage,
  HorariosIrtPage,
  HorariosItmPage,
  HorariosPyMesPage,
  GruposPage,
  ConoceUnipoliPage,
  CroquisPage,
  HomePage,
  HomegPage,
  InformacionEventosPage,
  AreasDeportivasYCafeteriasPage,
  CentroInformacionPage,
  LaboratoriosPage,
  Ud1Page,
  Ud2Page,
  Ud3Page,
  TabsPage
       } from '../pages/index.paginas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


const config = {
  apiKey: "AIzaSyBEqKtJCsyLJBQibxDIdqqwd_KijpnchNc",
  authDomain: "unipoliapp.firebaseapp.com",
  databaseURL: "https://unipoliapp.firebaseio.com",
  projectId: "unipoliapp",
  storageBucket: "unipoliapp.appspot.com",
  messagingSenderId: "886176525130"
};

@NgModule({
  declarations: [
    MyApp,
    HorariosPage,
    GruposPage,
    ConoceUnipoliPage,
    CroquisPage,
    HomePage,
    HomegPage,
    InformacionEventosPage,
    HorariosIswPage,
    HorariosAmbPage,
    HorariosCivPage,
    HorariosIrtPage,
    HorariosItmPage,
    HorariosPyMesPage,
    AreasDeportivasYCafeteriasPage,
    CentroInformacionPage,
    LaboratoriosPage,
    Ud1Page,
    Ud2Page,
    Ud3Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HorariosPage,
    HorariosIswPage,
    GruposPage,
    ConoceUnipoliPage,
    CroquisPage,
    HomePage,
    HomegPage,
    InformacionEventosPage,
    HorariosIswPage,
    HorariosAmbPage,
    HorariosCivPage,
    HorariosIrtPage,
    HorariosItmPage,
    HorariosPyMesPage,
    AreasDeportivasYCafeteriasPage,
    CentroInformacionPage,
    LaboratoriosPage,
    Ud1Page,
    Ud2Page,
    Ud3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
