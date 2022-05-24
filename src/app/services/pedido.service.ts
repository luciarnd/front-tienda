import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../model/pedido';
import { PedidoDTO } from '../model/pedidoDTO';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
   }

   public findAll(): Observable<PedidoDTO[]>{
     return this.http.get<PedidoDTO[]>(`${this.apiBaseUrl}/pedido/all`);
   }
   public updatePedido(pedido: Pedido): Observable<Pedido>{
     return this.http.put<Pedido>(`${this.apiBaseUrl}/pedido/update`, pedido)
   }
   public addPedido(pedido: Pedido): Observable<Pedido>{
     return this.http.post<Pedido>(`${this.apiBaseUrl}/pedido/add`, pedido)
   }
   public deletePedido(id: number): Observable<Pedido>{
     return this.http.delete<Pedido>(`${this.apiBaseUrl}/pedido/delete/${id}`)
   }
}
