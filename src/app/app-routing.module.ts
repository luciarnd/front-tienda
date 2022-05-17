import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { ProductoComponent } from './component/producto/producto.component';

const routes: Routes = [
  {path: 'pedido/all', component: PedidoComponent},
  {path: 'producto/all', component:ProductoComponent},
  {path: 'cliente/all', component:ClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
