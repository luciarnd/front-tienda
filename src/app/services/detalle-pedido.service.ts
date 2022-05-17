import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetallePedido } from '../model/detallepedido'

@Injectable({
  providedIn: 'root'
})

export class DetallePedidoService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
   }

   public findAll(): Observable<DetallePedido[]>{
     return this.http.get<DetallePedido[]>(`${this.apiBaseUrl}/detallepedido/all`);
   }
   public updatePedido(detallePedido: DetallePedido): Observable<DetallePedido>{
     return this.http.put<DetallePedido>(`${this.apiBaseUrl}/detallepedido/update`, detallePedido)
   }
   public addPedido(detallePedido: DetallePedido): Observable<DetallePedido>{
     return this.http.post<DetallePedido>(`${this.apiBaseUrl}/detallepedido/add`, detallePedido)
   }
   public deletePedido(id: number): Observable<DetallePedido>{
     return this.http.delete<DetallePedido>(`${this.apiBaseUrl}/detallepedido/delete/${id}`)
   }
}
