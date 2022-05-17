import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  productos: Producto[];
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data => {
      this.productos = data;
    });
  }
  

}
