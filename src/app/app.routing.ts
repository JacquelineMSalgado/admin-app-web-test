import { Routes } from '@angular/router';
import { SesionGuard } from './guard/sesion.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { InicioSesionComponent } from './layouts/inicio-sesion/inicio-sesion.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
    canActivate: [ SesionGuard ]
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
