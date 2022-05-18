
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidos: Pedido[];
  page: number = 1;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.findAll().subscribe(data => {
      this.pedidos = data;
    });
  }

}
