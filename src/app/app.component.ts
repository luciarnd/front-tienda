import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './model/categoria';
import { CategoriaService } from './services/categoria.service';
import { Cliente } from './model/cliente';
import { ClienteService } from './services/cliente.service';
import { PedidoService } from './services/pedido.service';
import { ProductoService } from './services/producto.service';
import { Pedido } from './model/pedido';
import { Producto } from './model/producto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tienda';
  pedidos: Pedido[];
  productos: Producto[];
  categorias: Categoria[];
  clientes: Cliente[];

  constructor(private router: Router, private categoriaService: CategoriaService, private pedidoService: PedidoService, private productoService: ProductoService, private clienteService: ClienteService){}
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

    getCategorias() {
      this.categoriaService.findAll().subscribe(data => {
        this.categorias = data;
      })
    }

    getClientes(){
      this.clienteService.findAll().subscribe(data => {
        this.clientes = data;
      })
    }

      
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getPedidos();
    })

    this.router.events.subscribe(value => {
      this.getCategorias();
      this.getClientes();
    })
    this.router.events.subscribe(value => {
      this.getProductos();
    })
  }
}
