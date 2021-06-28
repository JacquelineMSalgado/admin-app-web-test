import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppRoutes } from './app.routing';
import { InicioSesionComponent } from './layouts/inicio-sesion/inicio-sesion.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { StockComponent } from './pages/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    InicioSesionComponent,
    ProductosComponent,
    VentasComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
