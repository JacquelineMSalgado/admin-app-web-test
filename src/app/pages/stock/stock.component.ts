import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stock: Object;
  encabezados: string[];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getStock();
  }

  getStock(): void {
    this.productoService.getStock().subscribe(resp => {
      console.log(resp);
      this.stock = resp;
      this.encabezados = Object.keys(this.stock[0]);
    })
  }

}
