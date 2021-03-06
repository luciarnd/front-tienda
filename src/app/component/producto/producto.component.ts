import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import * as FileSaver from 'file-saver';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: Producto[];
  categorias: Categoria[];
  updateProducto: Producto;
  deleteProducto: Producto;
  page: number = 1;
  
  constructor(private productoService: ProductoService, private categoriaService: CategoriaService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => {
      this.productos = data;
    });

    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


  public search(key: any): void {
    console.log(key);
    const res: Producto[] = [];
    for (const producto of this.productos) {
      if(producto.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      producto.descripcion.toLowerCase().indexOf(key.toLowerCase()) !== -1  ||
      producto.stock == key ||
      producto.categoriaNombre.toLowerCase().indexOf(key.toLowerCase()) !== -1  ||
      producto.precio == key) {
        res.push(producto);
      }
    }
    this.productos = res;
    if (res.length === 0 || !key) {
      this.productoService.findAll();
      this.ngOnInit();
    }
  
  }

  public abrirModal(producto: Producto | null, mode:string){
    if(mode === 'delete'){
      document.getElementById('id01').style.display='block';
      this.deleteProducto=producto;
     
    }
     if(mode === 'edit'){
      document.getElementById('id02').style.display='block';
        this.updateProducto=producto;
     }
    if(mode === 'add'){
      document.getElementById('id03').style.display='block';
      console.log("Entro");
      producto=null;
     }

  }

  public cerrar(mode: string){
    if (mode === 'delete'){
      document.getElementById('id01').style.display='none';
    }
    if (mode ==='edit'){
      document.getElementById('id02').style.display='none';
    }
    if(mode === 'add'){
      document.getElementById('id03').style.display='none';
    }
  }

  public onAddProducto(addForm: NgForm): void {
    document.getElementById('add-producto-form')?.click();
    this.productoService.addProducto(addForm.value).subscribe(
      (response: Producto) => {
        console.log(response);
        alert("El producto se ha a??adido correctamente.")
        this.productoService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert("Ha habido un error, int??ntelo de nuevo");
      addForm.reset();
    }
    );
  }

  public onUpdateProducto(producto: Producto): void {
    console.log(producto);
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

  public onDeleteProducto(productoid: number): void {
    this.productoService.deleteProducto(productoid).subscribe(
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
