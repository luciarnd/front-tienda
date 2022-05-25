import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
import { ProductoDTO } from '../model/productoDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
   }

   public findAll1(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiBaseUrl}/producto/all`);
  }
   public findAll(): Observable<ProductoDTO[]>{
    return this.http.get<ProductoDTO[]>(`${this.apiBaseUrl}/producto/all`);
   }
  public updateProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.apiBaseUrl}/producto/update`, producto)
  }
  public addProducto(producto: Producto): Observable<Producto>{
    console.log(producto);
    return this.http.post<Producto>(`${this.apiBaseUrl}/producto/add`, producto)
  }
  public deleteProducto(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.apiBaseUrl}/producto/delete/${id}`)
  }
  public descargaArchivo() {
    return this.http.get(`${this.apiBaseUrl}/excel/download`, {responseType: 'blob'})
  }

}
