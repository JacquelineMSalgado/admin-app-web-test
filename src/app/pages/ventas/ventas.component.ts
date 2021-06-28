import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  public ventasProducto = [];
  encabezados: string[];
  ventasMes: any;
  encabezados1: string[];
  ventasProductoMes: Object;
  encabezados2: string[];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getVentasPorProducto();
    this.getVentasPorMes();
    this.getVentasProductoMes();
  }

  getVentasPorProducto(): void {
    this.productoService.getVentasPorProducto().subscribe((resp: any) => {
      console.log(resp);
      this.ventasProducto = resp;
      this.encabezados = Object.keys(this.ventasProducto[0]);
    });
  }

  getVentasPorMes(): void {
    this.productoService.getVentasPorMes().subscribe((resp: any) => {
      console.log(resp);
      this.ventasMes = resp;
      this.encabezados1 = Object.keys(this.ventasMes[0]);
    });
  }

  getVentasProductoMes(): void {
    this.productoService.getVentasProductoMes().subscribe(resp => {
      console.log(resp);
      this.ventasProductoMes = resp;
      this.encabezados2 = Object.keys(this.ventasProductoMes[0]);
    })
  }

}
