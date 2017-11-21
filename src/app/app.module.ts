import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HorariosPage } from '../pages/horarios/horarios';
import { HorariosgPage } from '../pages/horariosg/horariosg';
import { GruposPage } from '../pages/grupos/grupos';
import { ConoceUnipoliPage } from '../pages/conoceUnipoli/conoceUnipoli';
import { CroquisPage } from '../pages/croquis/croquis';
import { HomePage } from '../pages/home/home';
import { HomegPage } from '../pages/homeg/homeg'; 
import { InformacionEventosPage } from '../pages/informacionEventos/informacionEventos';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HorariosPage,
    HorariosgPage,
    GruposPage,
    ConoceUnipoliPage,
    CroquisPage,
    HomePage,
    HomegPage,
    InformacionEventosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HorariosPage,
    HorariosgPage,
    GruposPage,
    ConoceUnipoliPage,
    CroquisPage,
    HomePage,
    HomegPage,
    InformacionEventosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
