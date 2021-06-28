import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

import { ChartData, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Label, MultiDataSet } from 'ng2-charts';
import { ProductoModel } from 'src/app/models/ProductosModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartLabels1: Label[];
  public doughnutChartData1: MultiDataSet;

  public productos: ProductoModel[] = [];
  public ventasProducto = [];
  public ventasMes = [];
  public ventasGenerales = [];
  public topVentas = [];
  public productoTop = '';

  public chartColors: any[] = [{ backgroundColor:['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'] }];

  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  }

  constructor(private productoService: ProductosService) { 
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];

    this.doughnutChartLabels1 = [];
    this.doughnutChartData1 = [];
  }

  ngOnInit(): void {
    this.getAllProductos();
    this.getVentasGenerales();
    this.getVentasPorProducto();
    this.getVentasPorMes();
    this.getVentasProductoMes();
    this.getTopUnidadesVentas();
    this.getTopVentas();
    this.getStock();
  }

  getAllProductos(): void {
    this.productoService.getAllProducts().subscribe(resp => {
      console.log(resp);
      this.productos = resp;
    })
  }

  getVentasGenerales(): void {
    this.productoService.getVentasGenerales().subscribe((resp: any) => {
      console.log(resp);
      this.ventasGenerales = resp;
    })
  }

  getVentasPorProducto(): void {
    this.productoService.getVentasPorProducto().subscribe((resp: any) => {
      console.log(resp);
      this.ventasProducto = resp;
      for (var i = 0; i < this.ventasProducto.length; i++) {
        this.doughnutChartLabels.push(this.ventasProducto[i].Titulo);
        this.doughnutChartData.push(this.ventasProducto[i].CantidadVendida);
      }
    });
  }

  getVentasPorMes(): void {
    this.productoService.getVentasPorMes().subscribe((resp: any) => {
      console.log(resp);
      this.ventasMes = resp;
      for (var i = 0; i < this.ventasMes.length; i++) {
        this.doughnutChartLabels1.push(this.ventasMes[i].Mes);
        this.doughnutChartData1.push(this.ventasMes[i].Total);
      }
    });
  }

  getVentasProductoMes(): void {
    this.productoService.getVentasProductoMes().subscribe(resp => {
      console.log(resp);
      
    })
  }

  getTopUnidadesVentas(): void {
    this.productoService.getTopUnidadesVentas().subscribe(resp => {
      console.log(resp);
      
    })
  }

  getTopVentas(): void {
    this.productoService.getTopVentas().subscribe((resp: any) => {
      console.log(resp);
      this.topVentas = resp;
    })
  }

  getStock(): void {
    this.productoService.getStock().subscribe(resp => {
      console.log(resp);
      
    })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
