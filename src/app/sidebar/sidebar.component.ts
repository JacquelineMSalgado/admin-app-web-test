import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Inicio',         icon:'nc-layout-11',       class: '' },
  { path: '/productos',         title: 'Productos',             icon:'nc-tag-content',    class: '' },
  { path: '/ventas',          title: 'Ventas',              icon:'nc-bag-16',      class: '' },
  { path: '/stock', title: 'Stock',     icon:'nc-box-2',    class: '' },
  // { path: '/cerrar-sesion',       title: 'Cerrar sesión',    icon:'nc-single-02',  class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
