import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  page: number = 1;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });
  }

}
