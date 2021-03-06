
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { Pedido } from 'src/app/model/pedido';
import { Producto } from 'src/app/model/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[];
  productos: Producto[];
  deletePedidoByProducto: Pedido;
  deletePedido: Pedido;
  updatePedido: Pedido;
  clientes: Cliente[];
  page: number = 1;

  constructor(private pedidoService: PedidoService, private clienteService: ClienteService, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.pedidoService.findAll().subscribe(data => {
      this.pedidos = data;
    });

    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });

    this.productoService.findAll().subscribe(data => {
      this.productos = data;
    })
  }

  public search(key: any): void {
    console.log(key);
    const res: Pedido[] = [];
    for (const pedido of this.pedidos) {
      let fullName = pedido.clienteNombre + " " +pedido.clienteApellido1;
      if(pedido.fecha == key || 
        fullName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        res.push(pedido);
      }
    }
    this.pedidos = res;
    if (res.length === 0 || !key) {
      this.pedidoService.findAll();
      this.ngOnInit();
    }
  
  }

  public abrirModal(pedido: Pedido | null, mode:string){
    if(mode === 'delete'){
      document.getElementById('id01').style.display='block';
      this.deletePedidoByProducto=pedido;
     
    }
     if(mode === 'edit'){
      document.getElementById('id02').style.display='block';
        this.updatePedido=pedido;
     }
    if(mode === 'add'){
      document.getElementById('id03').style.display='block';
      console.log("Entro");
      pedido=null;
     }
     if (mode === 'deletePedido') {
       this.pedidoService.findAll().subscribe(deletePedido =>{
         deletePedido=this.pedidos;
       })
       document.getElementById('id04').style.display = 'block';
        this.deletePedido=pedido;
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
    if (mode === 'deletePedido') {
      document.getElementById('id04').style.display = 'none';
    }
  }

  public onAddPedido(addForm: NgForm): void {
    // document.getElementById('addForm')?.click();
    console.log(addForm.value);
    this.pedidoService.addPedido(addForm.value).subscribe(
      (response: Pedido) => {
        console.log(response);
        this.pedidoService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
    );
  }

  public onUpdatePedido(pedido: Pedido): void {
    console.log(pedido);
    this.pedidoService.updatePedido(pedido).subscribe(
      (response: Pedido) => {
        console.log(response);
        this.pedidoService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onDeletePedidoByProducto(pedidoid: number, productoId: number): void{
    this.pedidoService.deletePedidoByProducto(pedidoid, productoId).subscribe((response: Pedido)=>{
      console.log(response);
      this.pedidoService.findAll();
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
  })
  }

  public onDeletePedido(id: number): void{
    console.log(id);
    this.pedidoService.deletePedido(id).subscribe((response: Pedido)=>{
      console.log(response);
      this.pedidoService.findAll();
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
  })
  }
  public onSelectPedido(id: number): any{
    this.pedidoService.findAllById(id).subscribe((response: Pedido)=>{
      this.pedidoService.findAllById(id);
    })
  }


}
