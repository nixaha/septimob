import { Component } from '@angular/core';

import { HorariosPage } from '../horarios/horarios';
import { ConoceUnipoliPage } from '../conoceUnipoli/conoceUnipoli';
import { HomePage } from '../home/home';
import { InformacionEventosPage } from '../informacionEventos/informacionEventos';
import { EnlacesPage } from '../enlaces/enlaces';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HorariosPage;
  tab3Root = ConoceUnipoliPage;
  tab4Root = InformacionEventosPage;
  tab5Root = EnlacesPage;

  constructor() {

  }
}
