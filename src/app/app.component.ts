import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from './model/pedido';
import { PedidoService } from './services/pedido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tienda';
  pedidos: Pedido[];

  constructor(private router: Router, private pedidoService: PedidoService){}
    getPedidos(){
      this.pedidoService.findAll().subscribe(data => {
        this.pedidos = data;
      });
    };

      
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getPedidos();
    })
  }
}
