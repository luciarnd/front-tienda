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

  public search(key: any): void {
    console.log(key);
    const res: Cliente[] = [];
    for (const cliente of this.clientes) {
      if(cliente.dni.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      cliente.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1  ||
      cliente.apellido1.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      cliente.apellido2.toLowerCase().indexOf(key.toLowerCase()) !== -1  ||
      cliente.telefono.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        res.push(cliente);
      }
    }
    this.clientes = res;
    if (res.length === 0 || !key) {
      this.clienteService.findAll();
      this.ngOnInit();
    }
  
  }

  public abrirModal(cliente: Cliente | null, mode:string){
    if(mode === 'delete'){
      document.getElementById('id01').style.display='block';
      this.deleteCliente=cliente;
     
    }
     if(mode === 'edit'){
      document.getElementById('id02').style.display='block';
        this.updateCliente=cliente;
     }
    if(mode === 'add'){
      document.getElementById('id03').style.display='block';
      console.log("Entro");
      cliente=null;
     }

  }

  public cerrar(mode: string){
    if (mode === 'delete'){
      document.getElementById('id01').style.display='none';
    }
    if (mode ==='edit'){
      document.getElementById('id02').style.display='none';
    }
    if(mode === 'add'){
      document.getElementById('id03').style.display='none';
    }
  }

  public onAddCliente(addForm: NgForm): void {
    // document.getElementById('addForm')?.click();
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
