import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiBaseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {
   }
   public findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiBaseUrl}/cliente/all`);
  }
  public updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiBaseUrl}/cliente/update`, cliente)
  }
  public addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiBaseUrl}/cliente/add`, cliente)
  }
  public deleteCliente(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.apiBaseUrl}/cliente/delete/${id}`)
  }
}
