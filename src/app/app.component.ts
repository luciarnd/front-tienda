import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetallePedido } from './model/detallepedido';
import { Pedido } from './model/pedido';
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

  constructor(private router: Router, private pedidoService: PedidoService, private detallePedidoService: DetallePedidoService){}
    getPedidos(){
      this.pedidoService.findAll().subscribe(data => {
        this.pedidos = data;
      });
    };

    getDetallePedidos() {
      this.detallePedidoService.findAll().subscribe(data => {
        this.detallePedidos = data;
      })
    }

      
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getPedidos();
    })

    this.router.events.subscribe(value => {
      this.getDetallePedidos();
    })
  }
}
