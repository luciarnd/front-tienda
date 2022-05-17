import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './model/categoria';
import { DetallePedido } from './model/detallepedido';
import { Pedido } from './model/pedido';
import { CategoriaService } from './services/categoria.service';
import { DetallePedidoService } from './services/detalle-pedido.service';
import { PedidoService } from './services/pedido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tienda';
  pedidos: Pedido[];
  detallePedidos: DetallePedido[];
  categorias: Categoria[];

  constructor(private router: Router, private pedidoService: PedidoService, private detallePedidoService: DetallePedidoService, private categoriaService: CategoriaService){}
    getPedidos(){
      this.pedidoService.findAll().subscribe(data => {
        this.pedidos = data;
      });
    };

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

      
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getPedidos();
    })

    this.router.events.subscribe(value => {
      this.getDetallePedidos();
    })

    this.router.events.subscribe(value => {
      this.getCategorias();
    })
  }
}
