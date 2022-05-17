import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from './model/pedido';
import { Producto } from './model/producto';
import { PedidoService } from './services/pedido.service';
import { ProductoService } from './services/producto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tienda';
  pedidos: Pedido[];
  productos: Producto[];

  constructor(private router: Router, private pedidoService: PedidoService, private productoService: ProductoService){}
    getPedidos(){
      this.pedidoService.findAll().subscribe(data => {
        this.pedidos = data;
      });
    };
    getProductos(){
      this.productoService.findAll().subscribe(data => {
        this.productos = data;
      })
    }

      
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getPedidos();
    })
  }
}
