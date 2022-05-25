import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  updateCategoria: Categoria;
  deleteCategoria: Categoria;
  categorias: Categoria[];

  page: number = 1;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(data => {
      this.categorias = data;
    });
  }

  public search(key: any): void {
    console.log(key);
    const res: Categoria[] = [];
    for (const categoria of this.categorias) {
      if(categoria.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        res.push(categoria);
      }
    }
    this.categorias = res;
    if (res.length === 0 || !key) {
      this.categoriaService.findAll();
      this.ngOnInit();
    }
  
  }

  public onAddCategoria(addForm: NgForm): void {
    // document.getElementById('add-categoria-form')?.click();
    this.categoriaService.addCategoria(addForm.value).subscribe(
      (response: Categoria) => {
        console.log(response);
        this.categoriaService.findAll();
        addForm.reset();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
    );
  }

  public onUpdateCategoria(categoria: Categoria): void {
    this.categoriaService.updateCategoria(categoria).subscribe(
      (response: Categoria) => {
        console.log(response);
        this.categoriaService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onDeleteCategoria(categoriaid: number): void {
    this.categoriaService.deleteCategoria(categoriaid).subscribe(
      (response: Categoria) => {
        console.log(response);
        this.categoriaService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public abrirModal(categoria: Categoria | null, mode:string){
    if(mode === 'delete'){
      document.getElementById('id01').style.display='block';
      this.deleteCategoria=categoria;
     
    }
     if(mode === 'edit'){
      document.getElementById('id02').style.display='block';
        this.updateCategoria=categoria;
     }
    if(mode === 'add'){
      document.getElementById('id03').style.display='block';
      console.log("Entro");
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

}
