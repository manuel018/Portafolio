import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

export default [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'resumen',
        component: ResumenComponent,
        title: 'Resumen - Manuel Yaya',
      },
      {
        path: 'tecnologias',
        component: TecnologiasComponent,
        title: 'Tecnologías - Manuel Yaya',
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto - Manuel Yaya',
      },
      {
        path: 'sobre-mi',
        component: SobreMiComponent,
        title: 'Sobre Mi - Manuel Yaya',
      },
      {
        path: 'proyectos',
        component: ProyectosComponent,
        title: 'Proyectos - Manuel Yaya',
      },
    ],
  },
] as Routes;
