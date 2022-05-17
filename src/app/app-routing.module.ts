import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallepedidoComponent } from './component/detallepedido/detallepedido.component';
import { PedidoComponent } from './component/pedido/pedido.component';

const routes: Routes = [
  {path: 'pedido/all', component: PedidoComponent},
  {path: 'detallepedido/all', component: DetallepedidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
