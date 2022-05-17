import { Component } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Categoria } from './model/categoria';
import { DetallePedido } from './model/detallepedido';
import { Pedido } from './model/pedido';
import { CategoriaService } from './services/categoria.service';
=======
import { Cliente } from './model/cliente';
import { DetallePedido } from './model/detallepedido';
import { Pedido } from './model/pedido';
import { Producto } from './model/producto';
import { ClienteService } from './services/cliente.service';
>>>>>>> 75f619845a7ae96c2db584d3c9802d348f070b7d
import { DetallePedidoService } from './services/detalle-pedido.service';
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
  
  detallePedidos: DetallePedido[];
  categorias: Categoria[];

<<<<<<< HEAD
  constructor(private router: Router, private pedidoService: PedidoService, private detallePedidoService: DetallePedidoService, private categoriaService: CategoriaService){}
=======
  clientes: Cliente[];

  constructor(private router: Router, private pedidoService: PedidoService, private productoService: ProductoService, private detallePedidoService: DetallePedidoService, private clienteService: ClienteService){}
 

>>>>>>> 75f619845a7ae96c2db584d3c9802d348f070b7d
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

    getDetallePedidos() {
      this.detallePedidoService.findAll().subscribe(data => {
        this.detallePedidos = data;
      })
    };

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
      this.getDetallePedidos();
    })

    this.router.events.subscribe(value => {
<<<<<<< HEAD
      this.getCategorias();
=======
      this.getClientes();
    })
    this.router.events.subscribe(value => {
      this.getProductos();
>>>>>>> 75f619845a7ae96c2db584d3c9802d348f070b7d
    })
  }
}
