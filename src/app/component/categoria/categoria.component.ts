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

  categorias: Categoria[];
  updateCategoria: Categoria;
  deleteCategoria: Categoria;
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
    document.getElementById('add-categoria-form')?.click();
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

  public onOpenModal(categoria: Categoria, mode: string): void {
    const container = document.getElementById('categoria-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal'); 

    if (mode === 'add') {
      button.setAttribute('data-target', '#addCategoriaModal');
    }

    if (mode === 'edit') {
      this.updateCategoria = categoria;
      button.setAttribute('data-target', '#updateCategoriaModal');
    }

    if (mode === 'delete') {
      this.deleteCategoria = categoria;
      button.setAttribute('data-target', '#deleteCategoriaModal');
    }
    container!.appendChild(button);
    button.click();

  }

}
