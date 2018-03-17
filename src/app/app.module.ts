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
  InformacionPage,
  AreasDeportivasYCafeteriasPage,
  CentroInformacionPage,
  LaboratoriosPage,
  Ud1Page,
  Ud2Page,
  Ud3Page,
  EnlacesPage,
  SeleccionarCarreraPage,
  LoginPage,
  AlumnoPage,
  RegistroPage,
  TabsPage
       } from '../pages/index.paginas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//plugin
import { OneSignal } from '@ionic-native/onesignal';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';


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
    InformacionPage,
    CentroInformacionPage,
    LaboratoriosPage,
    Ud1Page,
    Ud2Page,
    Ud3Page,
    EnlacesPage,
    SeleccionarCarreraPage,
    LoginPage,
    AlumnoPage,
    RegistroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule
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
    InformacionPage,
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
    EnlacesPage,
    SeleccionarCarreraPage,
    LoginPage,
    AlumnoPage,
    RegistroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PushnotificationProvider
  ]
})
export class AppModule {}
