import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/ProductosModel';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productos: ProductoModel[] = [];
  public encabezados: any[];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos(): void {
    this.productoService.getAllProducts().subscribe(resp => {
      console.log(resp);
      this.productos = resp;
      this.encabezados = Object.keys(this.productos[0]);
    });
  }

}
