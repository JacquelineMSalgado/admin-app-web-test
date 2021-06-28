import { Routes } from '@angular/router';
import { ProductosComponent } from 'src/app/pages/productos/productos.component';
import { TableComponent } from 'src/app/pages/table/table.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table',      component: TableComponent },
    { path: 'productos', component: ProductosComponent}
];
