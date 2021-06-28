import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoModel } from '../models/ProductosModel';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient) { }

  getAllProducts(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${ this.baseUrl }/products`);
  }

  getVentasGenerales() {
    return this.http.get(`${ this.baseUrl }/products/ventas-generales`);
  }

  getVentasPorProducto() {
    return this.http.get(`${ this.baseUrl }/products/ventas-por-producto`);
  }

  getVentasPorMes() {
    return this.http.get(`${ this.baseUrl }/products/ventas-por-mes`);
  }

  getVentasProductoMes() {
    return this.http.get(`${ this.baseUrl }/products/ventas-por-producto-mes`);
  }

  getTopUnidadesVentas() {
    return this.http.get(`${ this.baseUrl }/products/top-numero-ventas`);
  }

  getTopVentas() {
    return this.http.get(`${ this.baseUrl }/products/top-ventas`);
  }

  getStock() {
    return this.http.get(`${ this.baseUrl }/products/stock`);
  }
}
