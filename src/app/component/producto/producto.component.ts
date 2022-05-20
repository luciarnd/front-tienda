import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import * as FileSaver from 'file-saver';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoDTO } from 'src/app/model/productoDTO';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: ProductoDTO[];
  categorias: Categoria[];
  updateProducto: Producto;
  deleteProducto: Producto;
  page: number = 1;
  
  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => {
      this.productos = data;
    });

    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });
  }

  public onAddProducto(addForm: NgForm): void {
    document.getElementById('add-producto-form')?.click();
    this.productoService.addProducto(addForm.value).subscribe(
      (response: Producto) => {
        console.log(response);
        this.productoService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
    );
  }

  public onUpdateProducto(producto: Producto): void {
    this.productoService.updateProducto(producto).subscribe(
      (response: Producto) => {
        console.log(response);
        this.productoService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onDeleteCategoria(productoid: number): void {
    this.productoService.deletePedido(productoid).subscribe(
      (response: Producto) => {
        console.log(response);
        this.productoService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onOpenModal(producto: Producto, mode: string): void {
    const container = document.getElementById('producto-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal'); 

    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductoModal');
    }

    if (mode === 'edit') {
      this.updateProducto = producto;
      button.setAttribute('data-target', '#updateProductoModal');
    }

    if (mode === 'delete') {
      this.deleteProducto = producto;
      button.setAttribute('data-target', '#deleteProductoModal');
    }
    container!.appendChild(button);
    button.click();

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
