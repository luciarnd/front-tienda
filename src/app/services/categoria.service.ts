import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria'

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
   }

   public findAll(): Observable<Categoria[]>{
     return this.http.get<Categoria[]>(`${this.apiBaseUrl}/categoria/all`);
   }
   public updateCategoria(categoria: Categoria): Observable<Categoria>{
     return this.http.put<Categoria>(`${this.apiBaseUrl}/categoria/update`, categoria)
   }
   public addCategoria(categoria: Categoria): Observable<Categoria>{
     return this.http.post<Categoria>(`${this.apiBaseUrl}/categoria/add`, categoria)
   }
   public deleteCategoria(id: number): Observable<Categoria>{
     return this.http.delete<Categoria>(`${this.apiBaseUrl}/categoria/delete/${id}`)
   }
}
