import { Routes } from '@angular/router';
import { TableComponent } from 'src/app/pages/table/table.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table',      component: TableComponent },
];
