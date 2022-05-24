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
  page: number = 1;

  constructor(private detallePedidoService: DetallePedidoService) { }

  ngOnInit(): void {
    this.detallePedidoService.findAll().subscribe(data => {
      this.detallepedidos = data;
    });
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
