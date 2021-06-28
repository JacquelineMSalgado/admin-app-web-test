import { Routes } from '@angular/router';
import { ProductosComponent } from 'src/app/pages/productos/productos.component';
import { StockComponent } from 'src/app/pages/stock/stock.component';
import { TableComponent } from 'src/app/pages/table/table.component';
import { VentasComponent } from 'src/app/pages/ventas/ventas.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table',      component: TableComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'stock', component: StockComponent },
];
