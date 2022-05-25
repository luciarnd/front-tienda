import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetallePedido } from 'src/app/model/detallepedido';
import { Producto } from 'src/app/model/producto';

import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detallepedido',
  templateUrl: './detallepedido.component.html',
  styleUrls: ['./detallepedido.component.css']
})
export class DetallepedidoComponent implements OnInit {


  updateDP: DetallePedido;
  deleteDP: DetallePedido;
  detallepedidos: DetallePedido[];
  productos1= [];
  productos: Producto[];
  page: number = 1;


  constructor(private detallePedidoService: DetallePedidoService, private productosService: ProductoService) { }

  ngOnInit(): void {
    this.detallePedidoService.findAll().subscribe(data => {
      this.detallepedidos = data;
    });
    this.getProductos();
  }


  public abrirModal(detallePedido: DetallePedido, mode: string) {
    if (mode === 'delete') {
      document.getElementById('id01').style.display = 'block';
      this.deleteDP = detallePedido;

    }
    if (mode === 'edit') {
      document.getElementById('id02').style.display = 'block';
      this.updateDP = detallePedido;
    }
    if (mode === 'add') {
      document.getElementById('id03').style.display = 'block';
      console.log("Entro");

    }

  }

  public cerrar(mode: string) {
    if (mode === 'delete') {
      document.getElementById('id01').style.display = 'none';
    }
    if (mode === 'edit') {
      document.getElementById('id02').style.display = 'none';
    }
    if (mode === 'add') {
      document.getElementById('id03').style.display = 'none';
    }
  }

  public onAddDetallePedido(addForm: NgForm): void {
    this.detallePedidoService.addDetallePedido(addForm.value).subscribe(
      (response: DetallePedido) => {
        console.log(response);
        this.detallePedidoService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateDetallePedido(detallePedido: DetallePedido): void {
    this.detallePedidoService.updateDetallePedido(detallePedido).subscribe(
      (response: DetallePedido) => {
        console.log(response);
        this.detallePedidoService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCliente(DPid: number): void {
    this.detallePedidoService.deleteDetallePedido(DPid).subscribe((response: DetallePedido) => {
      console.log(response);
      this.detallePedidoService.findAll();
      this.ngOnInit();
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public getProductos(): void{
    this.productosService.findAll1().subscribe(productos=>{
      console.log('pepe',productos);
      
      productos.forEach(producto => {
        this.productos1.push({ 
        text: producto.nombre,
        value: producto.id})
        this.productos=productos;
      });
    })
    console.log('pepe2',this.productos);
  }
  
  

  public search(key: any): void {
    console.log(key);
    const res: DetallePedido[] = [];
    for (const detallePedido of this.detallepedidos) {
      if(detallePedido.pedidoId == key ||
      detallePedido.productoNombre.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        res.push(detallePedido);
      }
    }
    this.detallepedidos = res;
    if (res.length === 0 || !key) {
      this.detallePedidoService.findAll();
      this.ngOnInit();
    }
  
  }


}
