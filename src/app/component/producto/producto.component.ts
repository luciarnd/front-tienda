import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: Producto[];
  page: number = 1;
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => {
      this.productos = data;
    });
  }

  descargarExcel() {
    this.productoService.descargaArchivo().subscribe( data => {
      var blob = new Blob([data], { type: '*/*;charset=utf-8' });
      FileSaver.saveAs(blob, "productos.xlsx");
    });
    (error: HttpErrorResponse) => {
      alert("No se encontro el fichero");
    };
  }
  

}
