import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  
  deleteCliente: Cliente;
  updateCliente: Cliente;
  clientes: Cliente[];
  page: number = 1;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data;
    });
  }
  public abrirModal(cliente: Cliente, mode:string){
    if(mode === 'delete'){
      document.getElementById('id01').style.display='block';
     
    }
     if(mode === 'edit'){
      document.getElementById('id02').style.display='block';
     
     }
    if(mode === 'add'){

     }

  }

  public cerrar(mode: string){
    if (mode == 'delete'){
      document.getElementById('id01').style.display='none';
    }
    if (mode == 'edit'){
      document.getElementById('id02').style.display='none';
    }
    if(mode == 'add'){}
  }

  public onAddCliente(addForm: NgForm): void {
    document.getElementById('add-categoria-form')?.click();
    this.clienteService.addCliente(addForm.value).subscribe(
      (response: Cliente) => {
        console.log(response);
        this.clienteService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
    );
  }

  public onUpdateCliente(cliente: Cliente): void {
    this.clienteService.updateCliente(cliente).subscribe(
      (response: Cliente) => {
        console.log(response);
        this.clienteService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onDeleteCliente(clienteid: number): void{
    this.clienteService.deleteCliente(clienteid).subscribe((response: Cliente)=>{
      console.log(response);
      this.clienteService.findAll();
      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
    alert(error.message);
  })
  }



}
