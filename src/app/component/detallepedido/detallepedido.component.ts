import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/model/detallepedido';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';

@Component({
  selector: 'app-detallepedido',
  templateUrl: './detallepedido.component.html',
  styleUrls: ['./detallepedido.component.css']
})
export class DetallepedidoComponent implements OnInit {

  detallepedidos: DetallePedido[];

  constructor(private detallePedidoService: DetallePedidoService) { }

  ngOnInit(): void {
    this.detallePedidoService.findAll().subscribe(data => {
      this.detallepedidos = data;
    });
  }

}
