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
  GruposAPage,
  GruposBPage,
  GruposCPage,
  GruposDPage,
  GruposEPage,
  GrupoambPage,
  GrupocivPage,
  GrupoirtPage,
  GrupoiswPage,
  GrupoitmPage,
  GrupopymesPage,
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
  OlvidarcontraPage,
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
import { LocalNotifications } from '@ionic-native/local-notifications';
import { InAppBrowser } from '@ionic-native/in-app-browser';

const config = {
  apiKey: "AIzaSyDfd55hT8n0csz0S9I462oQIsEVHN0oSgM",
  authDomain: "appunipoli.firebaseapp.com",
  databaseURL: "https://appunipoli.firebaseio.com",
  projectId: "appunipoli",
  storageBucket: "appunipoli.appspot.com",
  messagingSenderId: "748525573115"
};

@NgModule({
  declarations: [
    MyApp,
    HorariosPage,
    GruposPage,
    GrupoambPage,
    GrupocivPage,
    GrupoirtPage,
    GrupoiswPage,
    GrupoitmPage,
    GrupopymesPage,
    GruposAPage,
    GruposBPage,
    GruposCPage,
    GruposDPage,
    GruposEPage,
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
    OlvidarcontraPage,
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
    GrupoambPage,
    GrupocivPage,
    GrupoirtPage,
    GrupoiswPage,
    GrupoitmPage,
    GrupopymesPage,
    GruposAPage,
    GruposBPage,
    GruposCPage,
    GruposDPage,
    GruposEPage,
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
    OlvidarcontraPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    LocalNotifications,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PushnotificationProvider
  ]
})
export class AppModule {}
